const express = require("express");

const itemRouter = require("./routes/itemRoutes");
const textInputRouter = require("./routes/textInputRoutes");
const quizRouter = require("./routes/quizRoutes");

const app = express();

app.use(express.json());
app.use("/api/v1/items", itemRouter);
app.use("/api/v1/translation", textInputRouter);
app.use("/api/v1/quiz", quizRouter);

module.exports = app;
