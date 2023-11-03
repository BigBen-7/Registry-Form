// "use strict";

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClosed = document.querySelector(".icon-closed");
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

//LOGIN BUTTON
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

//CLOSE BUTTON
iconClosed.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "eye-close.png";
  }
};
