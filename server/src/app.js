const express = require("express");
const urlRouter = require("../routes/url.route");

const app = express();

app.use(express.json());

/**
 * @route /
 * @description all routes goes here
 */
app.use("/", urlRouter);

module.exports = app;