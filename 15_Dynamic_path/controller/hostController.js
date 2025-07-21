const newHome = require("../models/homeModel");

exports.addHome = (request, response, next) => {
  response.render("host/edit-home", {
    title: "Add Home",
    currentPage: "add-home",
    editing: false,
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
  response.redirect("/host/host-homes");
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

exports.editHome = (request, response, next) => {
  const HOMEID = request.params.homeId;
  const editing = request.query.editing === "true";
  newHome.singleHome(HOMEID, (home) => {
    if (!home) {
      console.log("Home Not Found!");
      return response.redirect("/host-home-list");
    }
    response.render("host/edit-home", {
      home: home,
      title: "Edit Home",
      editing: editing,
      currentPage: "host-home-list",
    });
  });
};

exports.homeEdited = (request, response, next) => {
  let { homeId, homeName, homePrice, homeLocation, homeRating, homeUrl } =
    request.body;
  let home = new newHome(
    homeName,
    homePrice,
    homeLocation,
    homeRating,
    homeUrl
  );

  home.homeId = homeId;
  home.addHome();
  response.redirect("/host/host-homes");
};

exports.deleteHome = (request, response, next) => {
  const HOMEID = request.params.homeId;
  newHome.deleteHome(HOMEID, (error) => {
    if (!error) {
      console.log("Successfully deleted");
    }
    response.redirect("/host/host-homes");
  });
};
