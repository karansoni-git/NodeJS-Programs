/*
=> request Parameter
The request parameter is an instance of http.IncomingMessage class. It contains all the details about the incoming HTTP request, such as:

      Property/Method	                                  Description
req.url                                       The URL of the request
req.method                                    The HTTP method (GET, POST, etc.)
req.headers	                                  An object containing the request headers
req.on('data')	                              Listens for data chunks (for POST, PUT, etc.)
req.on('end')	                                Signals the end of the request body stream
req.socket or req.connection	                Info about client socket (IP, port)
req.statusCode (usually unused on request)	  This is usually for response, not request 
 */
const http = require("http");

const server = http.createServer((request, response) => {
  //all these data called meta data and these are sent by the browser
  //return the url
  console.log(`url : ${request.url}`);
  //return the method
  console.log(`method : ${request.method}`);
  //return the headers data sent by the browser
  console.log(request.headers);
});

const port = 9000;
server.listen(port, () => {
  console.log(`localhost:${port} is running`);
});
