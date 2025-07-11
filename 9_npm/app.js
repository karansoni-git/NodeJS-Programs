/*
=> What is npm?
-> npm stands for Node Package Manager.
-> It’s the default package manager for Node.js, which is a runtime for running JavaScript on the server side.
-> It’s used to install, share, and manage packages (also called modules or libraries) written in JavaScript.

=> What does npm do?
-> Installs packages: For example, if you want to use React, Express, or Lodash in your project, you use npm install <package-name>.
-> Manages dependencies: It keeps track of what libraries your project needs in a package.json file.
-> Publishes packages: Developers can share their own packages with others by publishing them on the npm registry (https://www.npmjs.com/).
-> Runs scripts: You can define custom commands in package.json and run them with npm run <script-name>.
*/

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url, request.method);
  if (request.url == "/") {
    response.setHeader("Content-type", "text/html");
    response.write(`<html>
  <head>
    <title>Document</title>
  </head>
  <body>
  <center>
    <h1>this is an example of node package manager (npm)</h1>
    </center>
  </body>
</html>
`);
  }
});

const port = 9000;

server.listen(port, () => {
  console.log(`localhost:${port} is started`);
});
