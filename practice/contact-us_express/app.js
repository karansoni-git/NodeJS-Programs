const express = require("express");
const path = require("path");

const homeRoute = require("./routes/home");
const contactRoute = require("./routes/contact");

const app = express();

app.use(express.urlencoded());
app.use(homeRoute);
app.use(contactRoute);

app.use((request, response, next) => {
  response.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const port = 9000;

app.listen(port, () => {
  console.log(`localhost:${port} is started`);
});
