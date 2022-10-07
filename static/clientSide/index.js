import "@babel/polyfill";
import { login, signup } from "./login";

const loginForm = document.querySelector(".form--login");
const signupForm = document.querySelector(".form--signup");

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // retrieve user signup information
    const userName = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordconfirm").value;

    // execute a post request using axios to create the user in db
    signup(userName, email, password, passwordConfirm);
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // retrieve user login information
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // execute a post request using axios to log the user in
    login(email, password);
  });
}
