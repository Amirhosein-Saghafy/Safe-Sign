// importing packages
const express = require("express");

// creating a router (subapplication)
const router = express.Router();

// defining routes
router.get('/', (req, res) => {
    res.render('home');
});

// exporting the router module
module.exports = router;