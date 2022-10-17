import "@babel/polyfill";
import { login, signup, logout } from "./login";
import { searchComponent, dropComponent } from "./inputForm";
import { preventDefaults } from "../utils";

const loginForm = document.querySelector(".form--login");
const signupForm = document.querySelector(".form--signup");
const signOutBtn = document.getElementById("logout-btn");
const componentInput = document.querySelector(".section-middle-input");
const dropZone = document.querySelector("#drop_zone");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // retrieve user signup information
    const userName = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordconfirm").value;

    // execute a post request using axios to create the user in db
    await signup(userName, email, password, passwordConfirm);
    document.querySelector(".btn--signup").textContent = "Signing-Up...";
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    // retrieve user login information
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // execute a post request using axios to log the user in
    await login(email, password);
    document.querySelector(".btn--login").textContent = "Logging-in...";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });
}

if (signOutBtn) {
  signOutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    logout();
  });
}

if (componentInput) {
  document.querySelector(".btn-submit").addEventListener("click", (e) => {
    e.preventDefault();
    searchComponent(componentInput.value);
    componentInput.value = "";
  });
}

if (dropZone) {
  [("dragenter", "dragover")].forEach((eventName) => {
    dropZone.addEventListener(
      eventName,
      () => {
        dropZone.classList.add("highlight");
      },
      false
    );
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(
      eventName,
      () => {
        dropZone.classList.remove("highlight");
      },
      false
    );
  });

  ["dragenter", "dragover", "dragleave", "drop"].forEach((event) => {
    window.addEventListener(event, preventDefaults, false);
  });

  dropZone.addEventListener("drop", dropComponent, false);
}
