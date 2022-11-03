const express = require('express');
const router = express.Router();
const WeatherController = require("../controller/weather.controller")
router.get("/", WeatherController.HomePage);
router.post("/weatherreport", WeatherController.WeatherReport);
module.exports = router;