const express = require("express");
const router = express.Router();

const userController = require("../controller/UserController");

router.post("/registration", userController.UserRegistration);

module.exports = router;
