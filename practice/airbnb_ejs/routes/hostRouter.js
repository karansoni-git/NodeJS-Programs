const express = require("express");

const path = require("path");

const hostRouter = express.Router();

hostRouter.get("/host/add-home", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  response.render("addhome", { title: "Add Home" });
});

const houseList = [];

hostRouter.post("/host/add-home", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  console.log("data : ", request.body);
  console.log("data : ", request.body.homeName);
  houseList.push(request.body);
  response.render("homeAdded", { title: "Registered Successfully" });
});

//exports multiple things
exports.hostRouter = hostRouter;
exports.houseList = houseList;
