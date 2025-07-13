const express = require("express");

const path = require("path");

const hostRouter = express.Router();

hostRouter.get("/host/add-home", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  response.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
});

hostRouter.post("/host/add-home", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  console.log("data : ", request.body);
  response.sendFile(path.join(__dirname, "../", "views", "homeAdded.html"));
});

module.exports = hostRouter;
