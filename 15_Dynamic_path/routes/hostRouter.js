const express = require("express");

const hostRouter = express.Router();

const {
  addHome,
  homeAdded,
  hostHome,
  editHome,
  homeEdited,
  deleteHome,
} = require("../controller/hostController");

hostRouter.get("/host/add-home", addHome);

hostRouter.post("/host/add-home", homeAdded);

hostRouter.get("/host/host-homes", hostHome);

hostRouter.get("/host/edit-home/:homeId", editHome);

hostRouter.post("/host/edit-home/", homeEdited);

hostRouter.post("/host/delete-home/:homeId", deleteHome);

module.exports = hostRouter;
