const express = require("express");

const path = require("path");

const contactRoute = express.Router();

contactRoute.get("/contact-us", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  console.log("This is a /contact-us GET request path middleware");
  response.sendFile(path.join(__dirname, "../", "views", "addContact.html"));
});

contactRoute.post("/contact-us", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  console.log("data : ", request.body);
  console.log("This is a /contact-us POST requst path middleware");
  response.sendFile(path.join(__dirname, "../", "views", "contactAdded.html"));
});

module.exports = contactRoute;
