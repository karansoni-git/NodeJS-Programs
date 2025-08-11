const express = require("express");

const storeRouter = express.Router();

const {
  home,
  bookings,
  favorites,
  index,
  homeDetails,
} = require("../controller/storeController");

storeRouter.get("/", index);

storeRouter.get("/homes", home);

storeRouter.get("/bookings", bookings);

storeRouter.get("/favourites", favorites);

module.exports = storeRouter;
