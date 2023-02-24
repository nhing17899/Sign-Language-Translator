const express = require("express");
const textInputController = require("../controllers/textInputController");

const router = express.Router();

router.route("/").post(textInputController.getSignPhotos);

module.exports = router;
