const Item = require("../models/item");

// MIDDLEWARE
exports.checkText = async (req, res, next, val) => {
  const item = await Item.findOne({ text: val }, function (err) {
    if (err)
      return res.status(400).json({
        status: "fail",
        messsage: err,
      });
  });
};

/////////////
exports.getAllItems = async (req, res) => {
  const items = await Item.find({});

  try {
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: items.length,
      data: { items: items },
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getItem = async (req, res) => {
  const item = await Item.findOne({ text: req.params.text });

  try {
    res.status(200).json({
      status: "success",
      data: { item: item },
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createItem = async (req, res) => {
  const item = new Item(req.body);
  try {
    await item.save();
    res.status(200).json({
      status: "success",
      data: { item: item },
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
