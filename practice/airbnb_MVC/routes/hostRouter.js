const express = require("express");

const hostRouter = express.Router();

const {
  addHome,
  homeAdded,
  hostHome,
} = require("../controller/hostController");

hostRouter.get("/host/add-home", addHome);

hostRouter.post("/host/add-home", homeAdded);

hostRouter.get("/host/host-homes", hostHome);

module.exports = hostRouter;
