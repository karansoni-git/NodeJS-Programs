const express = require("express");

const app = express();

app.use((request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  console.log("This is a first middleware ");
  next();
});

app.use((request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  console.log("This is a second middleware");
  next();
});

// app.use((request, response, next) => {
//   console.log(`url : ${request.url}`);
//   console.log(`method : ${request.method}`);
//   console.log("This is a third middleware");
//   response.send("<h1>This response is from third middleware</h1>");
// });

app.get("/", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  console.log("This is a / request path middleware");
  response.send("<h1>This response is from / request path</h1>");
});

app.get("/contact-us", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  console.log("This is a /contact-us GET request path middleware");
  response.send(`
    <center>
    <h3>Enter your details: </h3>
    <form action="/contact-us" method="post">
    <input type="text" name="Name" placeholder="Enter your name" /><br/><br/>
    <input type="number" name="Age" placeholder="Enter your age" /><br/><br/>
    <input type="submit" value"Submit"/>
    </form>
    <center>
    `);
});

app.post("/contact-us", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  console.log("This is a /contact-us POST requst path middleware");
  response.send("<h1>Your data submitted successfully</h1>");
});

const port = 9000;
app.listen(port, () => {
  console.log(`localhost:${port} is started`);
});
