const Item = require("../models/item");

const processInput = (text) => {
  text = text.trim().toLowerCase();
  text = text.replaceAll("\n", " ");
  text = text.split(" ");

  var words = [];

  for (var i = 0; i < text.length; i++) {
    var word = text[i].replace(/[^a-z]/gi, "");
    if (word == "") continue;
    words.push(word);
  }
  return words.join(" ");
};

const getLetterPhotos = async (text) => {
  text = text.split(" ");
  var result = [];
  for (var i = 0; i < text.length; i++) {
    var word = text[i];
    var resultElement = [];
    for (var j = 0; j < word.length; j++) {
      const signPhoto = await Item.findOne({ text: word[j] }).signPhoto;
      resultElement.push(signPhoto);
    }
    result.push(word);
  }
  return result;
};

exports.getSignPhotos = async (req, res) => {
  const text = processInput(req.body.text);
  const item = await Item.findOne({ text: text }).lean();
  if (!item) {
    const data = await getLetterPhotos(text);
    try {
      res.status(200).json({
        status: "success",
        dataType: "alphabet",
        data: data
      });
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: err,
      });
    }
  } else {
    var dataType = "";
    var data = "";
    switch (item.category) {
      case "daily conversation":
        dataType = "conversation";
        data = item.sentencePhotos;
        break;
      default:
        dataType = "word";
        data = item.signPhoto;
        break;
    }
    try {
      res.status(200).json({
        status: "success",
        dataType: dataType,
        data: data,
      });
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: err,
      });
    }
  }
};
