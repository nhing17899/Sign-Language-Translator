const express = require("express");
const quizController = require("../controllers/quizController");

const router = express.Router();

router.route("/category").post(quizController.getQuizByCategory);
router.route("/difficulty").post(quizController.getQuizByDifficulty);

module.exports = router;
