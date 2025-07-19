const express = require("express");

const hostRouter = express.Router();

const { addHome, homeAdded } = require("../controller/homeController");

hostRouter.get("/host/add-home", addHome);

hostRouter.post("/host/add-home", homeAdded);

module.exports = hostRouter;
