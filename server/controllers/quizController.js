const Item = require("../models/item");

// QUIZZES BY CATEGORY

const addImageToTextQuiz = (item) => {
  switch (item.category) {
    case "daily conversation":
      question = item.sentencePhotos;
      break;
    default:
      question = [item.signPhoto];
      break;
  }

  return {
    quizType: "image to text",
    question: question,
    answer: item.text,
  };
};

const checkIfIncluded = (arr, text) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === text) return true;
  }
};

const addTextToImageQuiz = async (item) => {
  if (!item) {
    return "Loading";
  }
  let choices = [];
  let trackList = [];
  let choice = "";
  switch (item.category) {
    case "daily conversation":
      choice = item.sentencePhotos;
      break;
    default:
      choice = [item.signPhoto];
      break;
  }
  choices.push(choice);
  trackList.push(item.text);

  for (let i = 0; i < 3; i++) {
    let otherChoice = await Item.aggregate([{ $sample: { size: 1 } }]);

    while (
      checkIfIncluded(trackList, otherChoice[0].text) ||
      otherChoice[0].category === "alphabet"
    ) {
      otherChoice = await Item.aggregate([{ $sample: { size: 1 } }]);
    }
    let otherChoiceImages = "";
    switch (otherChoice[0].category) {
      case "daily conversation":
        otherChoiceImages = otherChoice[0].sentencePhotos;
        break;
      default:
        otherChoiceImages = [otherChoice[0].signPhoto];
        break;
    }
    choices.push(otherChoiceImages);
    trackList.push(otherChoice[0].text);
  }

  return {
    quizType: "text to image",
    question: item.text,
    answer: choice,
    choices: choices,
  };
};

exports.getQuizByCategory = async (req, res) => {
  const category = req.body.category;
  const items = await Item.find({ category: category }).limit(5);
  let quizzes = [];

  for (let i = 0; i < 3; i++) {
    quizzes.push(addImageToTextQuiz(items[i]));
  }

  quizzes.push(await addTextToImageQuiz(items[3]));
  quizzes.push(await addTextToImageQuiz(items[4]));

  function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
  }
  shuffleArray(quizzes);

  try {
    res.status(200).json({
      status: "success",
      data: quizzes,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

// QUIZZES BY DIFFICULTY

exports.getQuizByDifficulty = async (req, res) => {
  const difficulty = req.body.difficulty;
  const items = await Item.find({ difficulty: difficulty }).limit(8);
  let quizzes = [];

  for (let i = 0; i < items.length; i++) {
    if (i < 4) {
      quizzes.push(addImageToTextQuiz(items[i]));
    } else {
      quizzes.push(await addTextToImageQuiz(items[i]));
    }
  }
  function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
  }
  shuffleArray(quizzes);
  try {
    res.status(200).json({
      status: "success",
      data: quizzes,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
