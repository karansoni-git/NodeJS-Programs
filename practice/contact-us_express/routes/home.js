const express = require("express");
const path = require("path");
const homeRoute = express.Router();

homeRoute.get("/", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  console.log("This is a / GET request path middleware");
  response.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = homeRoute;
