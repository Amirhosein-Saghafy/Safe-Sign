// importing packages
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require('helmet');

// importing modules
const viewRouter = require('./Routes/viewRoutes');

// creating a new app
const app = express();

// Set ejs as template engine
app.set('view engine', 'ejs');

// using middlewares
app.use(express.static('./Assets'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(helmet());

// defining routes
app.use('/', viewRouter);

// exporting the app module
module.exports = app;
