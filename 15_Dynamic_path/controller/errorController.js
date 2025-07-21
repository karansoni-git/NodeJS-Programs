exports.error = (requset, response, next) => {
  response.status(404);
  response.render("404", { title: "404 Error", currentPage: "404 Error" });
};
