let popup = document.querySelector('signUpPage');

function signUpClick(){
  popup.classList.add("signUpPageOpened");
  popup.classList.add("signUpButtonHidden");
}

function signUpClose(){
  popup.classList.remove("signUpPageOpened");
  popup.classList.remove("signUpButtonHidden");
}