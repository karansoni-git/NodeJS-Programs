const express = require("express");

const path = require("path");

const storeRouter = require("./routes/storeRouter");

const hostRouter = require("./routes/hostRouter");

const { error } = require("./controller/errorController");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded());
app.use(storeRouter);
app.use(hostRouter);

app.use(error);

const port = 9000;

app.listen(port, () => {
  console.log(`localhost:${port} is started`);
});
