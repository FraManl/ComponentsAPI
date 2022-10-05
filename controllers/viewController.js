const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).render("overview", { title: "All Users", users });
});
