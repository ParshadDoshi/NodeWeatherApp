const express = require('express');
const router = express.Router();
const LoginController = require("../controller/login.controller")

router.get("/login", LoginController.Login);
router.post("/logincheck", LoginController.Logincheck)
module.exports = router;