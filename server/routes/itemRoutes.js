const express = require("express");
const Item = require("../models/item");
const app = express();

app.post("/item", async (request, response) => {
    const item = new Item(request.body);
  
    try {
      await item.save();
      response.send(item);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/item", async (request, response) => {
    const items = await Item.find({});
  
    try {
      response.send(items);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;