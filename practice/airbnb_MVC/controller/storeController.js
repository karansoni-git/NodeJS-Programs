const { newHome } = require("../models/homeModel");

exports.home = (request, response, next) => {
  newHome.showAllHomes((houseList) => {
    response.render("store/home-list", {
      houseList: houseList,
      title: "Homes List",
      currentPage: "home-list",
    });
  });
};

exports.index = (request, response, next) => {
  newHome.showAllHomes((houseList) => {
    response.render("store/index", {
      houseList: houseList,
      title: "Airbnb Home",
      currentPage: "index",
    });
  });
};

exports.bookings = (request, response, next) => {
  response.render("store/bookings", {
    title: "My Bookings",
    currentPage: "bookings",
  });
};

exports.favorites = (request, response, next) => {
  newHome.showAllHomes((houseList) => {
    response.render("store/favourite-list", {
      houseList: houseList,
      title: "My Favourites",
      currentPage: "favourite-list",
    });
  });
};
