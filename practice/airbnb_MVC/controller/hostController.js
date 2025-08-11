const { newHome } = require("../models/homeModel");

exports.addHome = (request, response, next) => {
  response.render("host/add-home", {
    title: "Add Home",
    currentPage: "add-home",
  });
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
  //this addHome is a class function called through newHome class object : home
  home.addHome();
  response.render("host/home-added", {
    title: "Registered Successfully",
  });
};

exports.hostHome = (request, response, next) => {
  newHome.showAllHomes((houseList) => {
    response.render("host/host-home-list", {
      houseList: houseList,
      title: "Host Homes List",
      currentPage: "host-home-list",
    });
  });
};
