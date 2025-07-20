const express = require("express");

const userRouter = require("./routes/userRouter");

const hostRouter = require("./routes/hostRouter");

const { error } = require("./controller/errorController");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use(error);

const port = 9000;

app.listen(port, () => {
  console.log(`localhost:${port} is started`);
});
