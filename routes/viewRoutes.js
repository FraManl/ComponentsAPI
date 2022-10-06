const express = require("express");
const viewController = require("../controllers/viewController.js");

const router = express.Router();

router.get("/", viewController.getOverview);

router.route("/login").get(viewController.getLoginForm);
router.route("/signup").get(viewController.getSignupForm);

module.exports = router;
