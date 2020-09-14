// Apply a display block to #pswd_info on focus on #pswd
$("#pswd").on("focus", function (event) {
  $("#pswd_info").fadeIn(400);
});
//display none to #pswd_info when blur
$("#pswd").on("blur", function (event) {
  $("#pswd_info").fadeOut(400);
});

// on every key pressed "keyup"
$("#pswd").on("keyup", function (event) {
  const pswdValue = $("#pswd").val();
  console.log(pswdValue);

  // !! casting for boolean
  const numberValid = !!pswdValue.match(/\d/);
  console.log(numberValid);
  const capitalValid = pswdValue.match(/[A-Z]/);
  const letterValid = pswdValue.match(/[A-z]/);
  const lengthValid = pswdValue.length >= 8;

  displayValidity("#number", numberValid);
  displayValidity("#capital", capitalValid);
  displayValidity("#letter", letterValid);
  displayValidity("#length", lengthValid);
});

function displayValidity(id, condition) {
  if (condition) {
    $(id).addClass("valid").removeClass("invalid");
  } else {
    $(id).addClass("invalid").removeClass("valid");
  }
}

// on submit
$("form").on("submit", function (event) {
  event.preventDefault();
  //if confirmation password is same as password
  const pswdValue = $("#pswd").val();
  const pswdConfirmValue = $("#pswdConfirm").val();
  const confirmValid = pswdValue === pswdConfirmValue;
  //and password check all the cases
  const numberValid = !!pswdValue.match(/\d/);
  const capitalValid = pswdValue.match(/[A-Z]/);
  const letterValid = pswdValue.match(/[A-z]/);
  const lengthValid = pswdValue.length >= 8;
  //Replace the form with "Success"
  const everyThingGood =
    confirmValid && numberValid && capitalValid && letterValid && lengthValid;
  if (everyThingGood) {
    $("form").html("Success");
  } else {
    alert("Username or Password invalid !");
  }
});
