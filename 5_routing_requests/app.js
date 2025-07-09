/*
When you create an HTTP server with the http module, you get access to:

req.url — the path requested by the client (like /home or /about?name=karan)

req.method — the HTTP method (GET, POST, etc.)

You use conditional statements (if, else if) to match paths and methods, and then send back the appropriate response. 
*/
const http = require("http");

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>Rounting respone</title></head>");
  response.write("<body><center>");
  if (request.url == "/") {
    response.write("<h1>This is an example of routing requests</h1>");
  } else if (request.url == "/first") {
    response.write("<h1>I am in First url </h1>");
  } else if (request.url == "/second") {
    response.write("<h1>I am in Second url </h1>");
  } else {
    response.write("<h1>404 ERROR Page Not Found </h1>");
  }
  response.write("</center></body>");
  response.write("</html>");
  response.end();
});

const port = 9000;
server.listen(port, () => {
  console.log(`localhost${port} is running`);
});
