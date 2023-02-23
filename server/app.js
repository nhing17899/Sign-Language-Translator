const express = require("express");
const itemRoutes = require('./routes/itemRoutes');
const app = express();

app.use(express.json());
app.use(itemRoutes);

module.exports = app;
