const Item = require("../models/item");

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

const addTextToImageQuiz = async (item) => {
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
      trackList.includes(otherChoice.text) ||
      otherChoice.category === "alphabet"
    ) {
      otherChoice = await Item.aggregate([{ $sample: { size: 1 } }]);
    }
    let otherChoiceImages = "";
    switch (otherChoice.category) {
      case "daily conversation":
        otherChoiceImages = item.sentencePhotos;
        break;
      default:
        otherChoiceImages = [item.signPhoto];
        break;
    }
    choices.push(otherChoiceImages);
    trackList.push(otherChoice.text);
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
  const items = await Item.find({ category: category }).limit(6);

  let quizzes = [];

  for (let i = 0; i < 6; i++) {
    console.log(quizzes);
    if (i < 3) {
      quizzes.push(addImageToTextQuiz(items[i]));
    } else {
      let quiz = await addTextToImageQuiz(items[i]);
      quizzes.push(quiz);
    }
  }
  
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
