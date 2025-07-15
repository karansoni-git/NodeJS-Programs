//core module : core module is the module which provided by nodejs they are also called built in modules automatically installed with nodejs package.
const path = require("path");

//external module : external modules are installed by the user for using specific feature/functionality of that module into his project.
const express = require("express");

//local modules : local modules are the modules which are created by user for building a modular and clean project so that code can modify easily.
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

/* you can use the common path where that path will concat to the further path and dont need to write long path in router
=> app.use("/host",hostRouter);
here we have give the /host as a common path 
*/

app.use((requset, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, "views", "404.html"));
});

const port = 9000;

app.listen(port, () => {
  console.log(`localhost:${port} is started`);
});
