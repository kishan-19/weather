const express = require('express');
const router = new express.Router();
const weatherModel = require("../models/weatherschema.js");


router.get("/", (req, res) => {
  res.render("index")
});
router.get("/weather", (req, res) => {
  res.render("weather");
})
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: 'opps! page not found'
  })
});

module.exports = router;
