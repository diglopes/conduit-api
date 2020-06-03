const { createWriteStream } = require("fs");
const path = require("path");
const express = require("express");
const morgan = require("morgan");

const accessLogStream = createWriteStream(
  path.join(__dirname, "logs", "access.log"),
  { flags: "a" }
);

const app = express();
app.use(express.json());
app.use(morgan("combined", { stream: accessLogStream }));

module.exports = app;
