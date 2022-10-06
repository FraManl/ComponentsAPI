const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).render("overview", { title: "All Users", users });
});

exports.getLoginForm = catchAsync(async (req, res, next) => {
  res.status(200).render("login", { title: "Log-In into your account" });
});
