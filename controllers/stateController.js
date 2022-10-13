const State = require("../models/stateModel");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllStates = catchAsync(async (req, res, next) => {
  const requests = await State.find();

  res.status(200).json({
    status: "success",
    requests: {
      requests,
    },
  });
});

exports.getState = catchAsync(async (req, res, next) => {
  const request = await State.findById(req.params.id);

  res.status(200).json({
    status: "success",
    requests: {
      request,
    },
  });
});

exports.createState = catchAsync(async (req, res, next) => {
  const request = await State.create(req.body);

  res.status(200).json({
    status: "success",
    requests: {
      request,
    },
  });
});
