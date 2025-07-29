const express = require("express");

const storeRouter = express.Router();

const {
  home,
  bookings,
  favourites,
  index,
  homeDetails,
  addToFavourites,
  removeFavourite,
} = require("../controller/storeController");

storeRouter.get("/", index);

storeRouter.get("/homes", home);

storeRouter.get("/bookings", bookings);

storeRouter.get("/favourites", favourites);

storeRouter.post("/favourites", addToFavourites);

storeRouter.post("/favourites/delete/:homeId", removeFavourite);

storeRouter.get("/homes/:homeId", homeDetails);

module.exports = storeRouter;
