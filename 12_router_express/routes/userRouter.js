const express = require("express");

const path = require("path");

const userRouter = express.Router();

userRouter.get("/", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  response.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = userRouter;
