const express = require("express");
const textInputController = require('../controllers/textInputController');

const router = express.Router();

router
  .route("/:text")
  .get(textInputController.getSignPhotos);

  module.exports = router;