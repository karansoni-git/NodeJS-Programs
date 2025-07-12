const express = require("express");

/*
=> What is body-parser?
body-parser is a middleware module in Node.js/Express.

1. It parses incoming request bodies in a middleware before your handlers, making it available under reqeust.body.
2. It helps you read data sent in POST, PUT, or PATCH requests — like form data, JSON, or raw data.

=> Why do we need it?
When a client sends data (e.g., a JSON object or a form submission), Node.js does not parse the body by default.

-> body-parser solves this problem by automatically:

1. Reading the incoming stream of data
2. Converting it to a JavaScript object/string/buffer
3. Attaching it to reqeust.body

=> install first to use body-parser module
  npm install body-parser
*/

// const bodyParser = require("body-parser");

const app = express();

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

// app.use(bodyParser.urlencoded());

/*use direct express object with method urlencoded() to get body*/
app.use(express.urlencoded());

app.post("/contact-us", (request, response, next) => {
  console.log(`url : ${request.url}`);
  console.log(`method : ${request.method}`);
  console.log("data : ", request.body);
  console.log("This is a /contact-us POST requst path middleware");
  response.send("<center><h1>Your data submitted successfully</h1></center>");
});

const port = 9000;
app.listen(port, () => {
  console.log(`localhost:${port} is started`);
});
