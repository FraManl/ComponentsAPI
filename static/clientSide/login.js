/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 900);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const signup = async (userName, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        userName,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Signed-Up successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 900);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/v1/users/logout",
    });

    if (res.data.status === "success") {
      showAlert("success", "See you soon!");
      window.setTimeout(() => {
        location.assign("/");
      }, 900);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
