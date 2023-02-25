const express = require("express");
const quizController = require("../controllers/quizController");

const router = express.Router();

router.route("/").post(quizController.getQuizByCategory);

module.exports = router;
