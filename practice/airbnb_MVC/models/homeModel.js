const fs = require("fs");
const path = require("path");

exports.newHome = class newHome {
  constructor(homeName, homePrice, homeLocation, homeRating, homeUrl) {
    this.homeName = homeName;
    this.homePrice = homePrice;
    this.homeLocation = homeLocation;
    this.homeRating = homeRating;
    this.homeUrl = homeUrl;
  }

  addHome() {
    newHome.showAllHomes((houseList) => {
      houseList.push(this);
      let homeDataPath = path.join(__dirname, "../", "data", "homeData.json");
      fs.writeFile(homeDataPath, JSON.stringify(houseList), (error) => {
        if (!error) {
          console.log("File Written successfully");
        }
      });
    });
  }

  static showAllHomes(callback) {
    let homeDataPath = path.join(__dirname, "../", "data", "homeData.json");
    fs.readFile(homeDataPath, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }
};
