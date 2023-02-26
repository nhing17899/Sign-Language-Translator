const Item = require("../models/item");

exports.getCategories = async (req, res) => {
  const categorizedData = await Item.aggregate([
    {
      $group: {
        _id: "$category",
        count: { $sum: 1 },
        titles: { $push: "$text" }
      }
    }
  ]);
  try {
    res.status(200).json({
      status: "success",
      data: categorizedData,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
