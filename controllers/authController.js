const crypto = require("crypto");

const { promisify } = require("util");

const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const catchAsync = require("../utils/catchAsync");

// const AppError = require("../utils/appError");

// const Email = require("../utils/email");

const signToken = function (id) {
  // token generator
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = function (user, statusCode, res) {
  // sign the token for the signin-up user
  const token = signToken(user._id);

  // define cookie options
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  // send back as a response the cookie embarking the token
  res.cookie("jwt", token, cookieOptions);
  user.password = undefined;

  res.status(statusCode).json({
    status: "succes",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  // retrieve and create the user
  const newUser = await User.create({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  // welcome the user by sending email
  const url = `${req.protocol}://${req.get("host")}/me`;
  //   await new Email(newUser, url).sendWelcome();

  // generate and send token back to user
  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  console.log(req.body);
  // extract user input from request body
  const { email, password } = req.body;

  // if no email or password is set, return to next middleware
  if (!email || !password) return next();

  const user = await User.findOne({ email }).select("+password");

  // if user is not found using the email or password is not matched, return to next middleware
  if (!user || !(await user.correctPassword(password, user.password)))
    return next();

  // if all above qualifies, generate and send token to user
  createSendToken(user, 200, req, res);
});
