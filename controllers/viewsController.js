const State = require("../models/stateModel");
const User = require("../models/userModels");
const catchAsync = require("../utils/catchAsync");

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = User.find();

  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
});
