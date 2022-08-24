const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");
const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");
const constainerPassword = document.querySelector("#container-password");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@-?#$";

let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

const generatePassword = () => {
  let pass = "";

  for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  constainerPassword.classList.remove("hide");
  password.innerHTML = pass;
  newPassword = pass;
};

let copyPassword = () => {
  navigator.clipboard.writeText(newPassword);
  alert("Copied password.");
};
