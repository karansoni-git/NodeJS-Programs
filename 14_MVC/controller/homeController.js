const { newHome } = require("../models/homeModel");

exports.addHome = (request, response, next) => {
  response.render("addHome", { title: "Add Home" });
};

exports.homeAdded = (request, response, next) => {
  let { homeName, homePrice, homeLocation, homeRating, homeUrl } = request.body;
  let home = new newHome(
    homeName,
    homePrice,
    homeLocation,
    homeRating,
    homeUrl
  );
  home.addHome();
  response.render("homeAdded", { title: "Registered Successfully" });
};

exports.home = (request, response, next) => {
  newHome.showAllHomes((houseList) => {
    response.render("home", {
      houseList: houseList,
      title: "Airbnb Home",
    });
  });
};
