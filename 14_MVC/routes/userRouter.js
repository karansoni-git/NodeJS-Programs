const express = require("express");

const userRouter = express.Router();

const { home } = require("../controller/homeController");

userRouter.get("/", home);

module.exports = userRouter;
