const express = require("express");

const itemRouter = require("./routes/itemRoutes");

const app = express();

app.use(express.json());
app.use("/api/v1/items", itemRouter);

module.exports = app;
