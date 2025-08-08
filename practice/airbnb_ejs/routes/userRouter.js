const express = require("express");

//import and destructuring it with its original name.
const { houseList } = require("./hostRouter");

const userRouter = express.Router();

userRouter.get("/", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  console.log(houseList);
  response.render("home", { houseList: houseList, title: "Airbnb Home" });
});

module.exports = userRouter;
