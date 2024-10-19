// importing packages
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require('helmet');

// creating a new app
const app = express();

// using middlewares
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(helmet());

// exporting the app module
module.exports = app;
