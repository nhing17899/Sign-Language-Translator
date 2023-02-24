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

const getLetterPhotos = (text) => {
    text = text.toArray();
    
}

exports.getSignPhotos = async (req, res) => {
  const text = processInput(req.params.text);
  const item = await Item.findOne({ text: text }).lean();
  if (!item) {

  } else if (item.category === "daily conversation") {
    res.status(200).json({
      status: "success",
      dataType: "array",
      data: item.sentencePhotos,
    });
  } else {
    res.status(200).json({
      status: "success",
      dataType: "string",
      data: item.signPhoto,
    });
  }
};
