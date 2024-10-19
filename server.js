// importing packages
const dotenv = require("dotenv");

// importing app module 
const app = require("./app");

// configure the process environment
dotenv.config({ path: "./config.env" });

// using process environment constants
const { PORT, HOST } = process.env;

// starting the app
app.listen(PORT, HOST, () => {
  console.log(`Server is up and running on host ${HOST} and port ${PORT}`);
});
