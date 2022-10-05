const express = require("express");
const viewController = require("../controllers/viewController.js");

const router = express.Router();

router.route("/").get(viewController.getOverview);

module.exports = router;
