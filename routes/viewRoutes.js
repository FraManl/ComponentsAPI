const express = require("express");
const viewController = require("../controllers/viewController.js");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/").get(viewController.getOverview);
router.route("/login").get(viewController.getLoginForm);
router.get("/signup", viewController.getSignupForm);

module.exports = router;
