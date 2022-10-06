const express = require("express");
const stateController = require("../controllers/stateController");

const router = express.Router();

router.get("/", stateController.getAllStates);
router.route("/:id").get(stateController.getState);

module.exports = router;
