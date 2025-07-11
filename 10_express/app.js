/*
=> What is Express?
-> Express is a minimal and flexible web application framework for Node.js.
-> It makes building web servers and APIs much easier and faster than using plain Node.js alone.
-> It provides a robust set of features like routing, middleware, handling HTTP requests/responses, etc.

=> Why use Express?
-> Plain Node.js requires you to write a lot of low-level code to handle HTTP requests.
-> Express simplifies this by providing a simple and clean API.
-> You can build web apps, REST APIs, and even complex server-side apps quickly.
*/

/*
first install the express : npm install express
then import express
*/
const express = require("express");

// Create an app
const app = express();

/*
=> What is .use() in Express.js?
In Express.js, .use() is a method used to add middleware to your application.
Middleware are functions that have access to the request (req), response (res), and the next function in the application’s request-response cycle.

1. Adds middleware or routes that run for all HTTP methods by default
2. Can run for all paths or a base path

=> How .use() works
.use() registers middleware to run on every request that matches the specified path (or all requests if no path is given).

=> It is useful for:
1. Logging
2. Parsing request bodies
3. Handling CORS
4. Serving static files
5. Creating routes

=> syntax : app.use([path], middlewareFunction)
*/
app.use("/", (request, response, next) => {
  console.log("route : ", request.url);
  console.log("in the first middleware");
  next();
});

/*
=> What is .get() in Express.js?
In Express.js, .get() is a route handler method.
It defines what to do when the server gets an HTTP GET request to a specific URL/path.

1. It matches HTTP GET requests (like when a browser requests a webpage).
2. It is used to serve pages, send data, or handle API GET endpoints.
3. Handles only GET requests
4. Runs only for exact GET path match
=> syntax : app.get(path, handlerFunction)
*/
app.get("/get", (request, response, next) => {
  console.log("route : ", request.url);
  console.log("in the second middleware");
  /*
  => What is .send() in Express.js?
  In Express.js, the .send() method is used on the response object (response) to send a response back to the client.
  It ends the request–response cycle.
  
  => How does it work?
  When you call res.send(): 
  1. It sets the correct Content-Type based on what you send
  2. It sends the data to the client.
  3. It ends the response automatically — you don’t need to call res.end()
  */
  response.send(`<p>this is an example of get()</p>`);
});

/*
=> What is .post() in Express.js?
In Express.js, .post() is used to define a route that handles HTTP POST requests to a specific URL.

It’s mainly used when:
1. A client sends data to the server (like submitting a form or an API call).
2. You want to create or update data on the server.
3. Handle POST requests → usually to receive & process data from the client side
=> syntax : app.post(path, handlerFunction)
*/
app.post("/post", (request, response, next) => {
  console.log("route : ", request.url);
  console.log("in the third middleware");
  response.send(`<p>this is an example of post()</p>`);
});

const port = 9000;

/*
In Express, listen() is a method provided by the Express app object (app) that starts your web server and makes it listen for incoming HTTP requests on a given port and optional hostname.
*/
app.listen(port, () => {
  `localhost:${port} is started`;
});
