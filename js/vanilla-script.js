const pswdInput = document.querySelector('#pswd');
const pswdConfirmInput = document.querySelector('#pswdConfirm');
const pswdInfo = document.querySelector('#pswd_info');
// Apply a display block to #pswd_info on focus on #pswd
pswdInput.addEventListener('focus', function (event) {
  pswdInfo.style.display = "block";
});
pswdInput.addEventListener('blur', function (event) {
  pswdInfo.style.display = "none";
});

// on every key pressed "keyup"
pswdInput.addEventListener('keyup', function (event) {
  // Gathering : checked the password value : $("#pswd").val()
  const pswdValue = pswdInput.value;
  console.log(pswdValue);

  //Logic
  //All cases to check
  // at least one number .match(/\d/)
  const numberValid = !!pswdValue.match(/\d/);
  // at least one Capital letter .match(/[A-Z]/)
  const capitalValid = pswdValue.match(/[A-Z]/);
  // at least one letter .match(/[A-z]/)
  const letterValid = pswdValue.match(/[A-z]/);
  // length >= 8
  const lengthValid = pswdValue.length >= 8;
  //display
  displayValidity('#number', numberValid);
  displayValidity('#capital', capitalValid);
  displayValidity('#letter', letterValid);
  displayValidity('#length', lengthValid);
})

function displayValidity(id, condition) {
  const myElement = document.querySelector(id)
  if (condition) {
    myElement.classList.add('valid');
    myElement.classList.remove('invalid');
    // myElement.className = 'valid';
  } else {
    myElement.classList.remove('valid');
    myElement.classList.add('invalid');
    // myElement.className = 'invalid';
  }
}

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  // Gathering
  const pswdValue = pswdInput.value;
  const pswdConfirmValue = pswdConfirmInput.value;
  // Logic
  //if confirmation password is same as password
  const confirmValid = pswdValue === pswdConfirmValue;
  //and password check all the cases
  const numberValid = !!pswdValue.match(/\d/);
  const capitalValid = pswdValue.match(/[A-Z]/);
  const letterValid = pswdValue.match(/[A-z]/);
  const lengthValid = pswdValue.length >= 8;
  // Feedback
  const everyThingGood = confirmValid && numberValid && capitalValid && letterValid && lengthValid;
  if (everyThingGood) {
    document.querySelector('form').innerHTML = 'Success';
  } else {
    alert('Bad student!');
  }
})

// https://medium.com/free-code-camp/how-to-write-a-jquery-like-library-in-71-lines-of-code-learn-about-the-dom-e9fb99dbc8d2
function $(selector) {
  return document.querySelector('selector');
}
// ! Warning, when dealing with many elements
function $$(selector) {
  return document.querySelectorAll('selector');
}