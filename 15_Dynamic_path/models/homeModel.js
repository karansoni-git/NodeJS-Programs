const { log } = require("console");
const fs = require("fs");
const path = require("path");
const favourites = require("./favouritesModel");

let homeDataPath = path.join(__dirname, "../", "data", "homeData.json");

module.exports = class newHome {
  constructor(homeName, homePrice, homeLocation, homeRating, homeUrl) {
    this.homeName = homeName;
    this.homePrice = homePrice;
    this.homeLocation = homeLocation;
    this.homeRating = homeRating;
    this.homeUrl = homeUrl;
  }

  addHome() {
    newHome.showAllHomes((houseList) => {
      if (this.homeId) {
        houseList = houseList.map((HOME) => {
          HOME.homeId === this.homeId ? this : HOME;
        });
      } else {
        this.homeId = Math.random().toString();
        houseList.push(this);
      }
      fs.writeFile(homeDataPath, JSON.stringify(houseList), (error) => {
        if (!error) {
          console.log("File Written successfully");
        }
      });
    });
  }

  static showAllHomes(callback) {
    fs.readFile(homeDataPath, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }

  static singleHome(HOMEID, callbackFun) {
    this.showAllHomes((homes) => {
      const HOME = homes.find((home) => home.homeId === HOMEID);
      callbackFun(HOME);
    });
  }

  static deleteHome(HOMEID, callbackFun) {
    this.showAllHomes((homes) => {
      const restHomes = homes.filter((home) => home.homeId !== HOMEID);
      fs.writeFile(homeDataPath, JSON.stringify(restHomes), (error) => {
        favourites.removeFavourite(HOMEID, callbackFun);
      });
    });
  }
};
