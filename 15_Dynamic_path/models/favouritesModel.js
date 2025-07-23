const fs = require("fs");
const path = require("path");
const { home } = require("../controller/storeController");

let favouritesDataPath = path.join(
  __dirname,
  "../",
  "data",
  "favouritesData.json"
);

module.exports = class favourites {
  static addFavourites(homeId, callback) {
    this.showAllFavourites((favouriteHomes) => {
      if (favouriteHomes.includes(homeId)) {
        callback("Home Is Already In The Favoutites");
      } else {
        favouriteHomes.push(homeId);
        fs.writeFile(
          favouritesDataPath,
          JSON.stringify(favouriteHomes),
          callback
        );
      }
    });
  }
  static showAllFavourites(callback) {
    fs.readFile(favouritesDataPath, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }

  static removeFavourite(HOMEID, callback) {
    this.showAllFavourites((homes) => {
      const restFavourites = homes.filter((id) => id !== HOMEID);
      fs.writeFile(
        favouritesDataPath,
        JSON.stringify(restFavourites),
        callback
      );
    });
  }
};
