"use strict";

const { createWriteStream } = require("fs");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const errorHandler = require("errorhandler");

const isProduction = process.env.NODE_ENV === "production";

const accessLogStream = createWriteStream(
  path.join(__dirname, "logs", "access.log"),
  { flags: "a" }
);

const app = express();
app.use(express.json());
app.use(morgan("combined", { stream: accessLogStream }));

app.use(require("./routes"));

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Handling error on development mode
if (!isProduction) {
  app.use(errorHandler());

  app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// Handling error on production mode
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

module.exports = app;
