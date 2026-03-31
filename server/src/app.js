const express = require("express");
const urlRouter = require("../routes/url.route");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({
    origin : process.env.FRONTEND_ENDPOINT,
    credentials : true
}));

/**
 * @route /
 * @description all routes goes here
 */
app.use("/", urlRouter);

module.exports = app;