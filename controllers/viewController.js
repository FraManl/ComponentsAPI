const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res, next) => {
  res.status(200).render("overview", { title: "All Users" });
});

exports.getLoginForm = catchAsync(async (req, res, next) => {
  res.status(200).render("login", { title: "Log-in into your account" });
});

exports.getSignupForm = catchAsync(async (req, res, next) => {
  res.status(200).render("signup", { title: "Sign-up & create your account" });
});
