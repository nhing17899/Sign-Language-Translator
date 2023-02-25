const Item = require("../models/item");

// MIDDLEWARE
exports.checkID = async (req, res, next, val) => {
  const item = await Item.findOne({ _id: val }, function (err) {
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
  const item = await Item.findById(req.params.id);

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
