/* 
the createServer() method is used to create an HTTP server. It’s part of the built-in http module and allows you to define how the server should handle incoming requests.

=>syntax:
http.createServer([requestListener])

=>requestListener: A callback function that gets executed every time an HTTP request hits the server. It takes two parameters:

-> req: The request object.
-> res: The response object

*/

/* the require() method is used to import modules, JSON, or local files into your program. It’s part of the CommonJS module system, which is the default in Node.js.
=> syntax: const moduleName = require('module-name');
*/

const http = require("http");

//first way
/*function requestListener(request, response) {
  console.log(request);
}
//this createServer() function return a  object that we have to listen continuously
const server = http.createServer(requestListener);
server.listen(3003);*/

//second way
/*const server = http.createServer(function (request, response) {
  console.log(request);
});
server.listen(3003);*/

//third way
const server = http.createServer((request, response) => {
  console.log(req);
});
server.listen(3003);
