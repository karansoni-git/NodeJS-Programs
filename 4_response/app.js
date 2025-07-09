/*
The response parameter in the http.createServer() method in Node.js is an instance of the http.ServerResponse class. It represents the server's response to the client and is used to send data, headers, and status codes.

      Method / Property	                                Description
response.writeHead(statusCode, headers)	      Sets status code and headers
response.statusCode	                          Sets or gets the response status code
response.setHeader(name, value)	              Adds a response header
response.getHeader(name)	                    Gets a specific header's value
response.removeHeader(name)	                  Removes a specific header
response.write(data)	                        Writes data to the response stream
response.end([data])	                        Ends the response, optionally sending data
response.writeContinue()	                    Sends a 100 Continue response
response.writeHead()	                        A shorthand to set status + headers at once
 */

const http = require("http");

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>Response Example</title></head>");
  response.write(
    "<body><center><h1>This is an example of Response from Server</h1><h2>Hello i am karan soni</h2></center></body>"
  );
  response.write("</html>");

  // response.write(
  //   "<html><head><title>Response Example</title></head><body><center><h1>This is an example of Response from Server</h1><h2>Hello i am karan soni</h2></center></body></html>"
  // );
  response.end();
});

const port = 9000;
server.listen(port, () => {
  console.log(`localhost:${port} is running`);
});
