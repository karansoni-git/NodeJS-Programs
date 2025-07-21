const favourites = require("../models/favouritesModel");
const newHome = require("../models/homeModel");

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

exports.homeDetails = (request, response, next) => {
  const HOMEID = request.params.homeId;
  newHome.singleHome(HOMEID, (home) => {
    if (!home) {
      response.redirect("/homes");
    } else {
      response.render("store/home-detail", {
        title: "Home Details",
        currentPage: "home-list",
        page: HOMEID,
        home: home,
      });
    }
  });
};

exports.favourites = (request, response, next) => {
  favourites.showAllFavourites((favourites) => {
    newHome.showAllHomes((houseList) => {
      const favouriteHomes = houseList.filter((house) =>
        favourites.includes(house.homeId)
      );
      response.render("store/favourite-list", {
        favouriteHomesList: favouriteHomes,
        title: "My Favourites",
        currentPage: "favourite-list",
      });
    });
  });
};

exports.addToFavourites = (request, response) => {
  favourites.addFavourites(request.body.homeId, (error) => {
    if (error) {
      console.log("error while select the home as a favourite");
    }
    response.redirect("/favourites");
  });
};

exports.removeFavourite = (request, response, next) => {
  const HOMEID = request.params.homeId;
  favourites.removeFavourite(HOMEID, (error) => {
    if (!error) {
      console.log("Successfully removed from favourites");
    }
    response.redirect("/favourites");
  });
};
