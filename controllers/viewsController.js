const State = require("../models/stateModel");
const catchAsync = require("../utils/catchAsync");

exports.getState = catchAsync(async (req, res, next) => {
  const state = State.find();

  res.status(200).json({
    status: "success",
    data: {
      state,
    },
  });
});
