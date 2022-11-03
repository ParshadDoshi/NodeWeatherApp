const express = require('express');
const dotenv = require('dotenv');
const Weatherroutes = require("./src/route/weather.route")
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Weatherroutes)
app.set("view engine", "ejs");
app.set('views', './src/view');
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Server is running at port 5000");
})