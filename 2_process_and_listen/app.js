/*
the listen() method is used to start a server and bind it to a specific port and optionally a hostname. It's typically used with the http, https, or net modules.

=>syntax: 
    server.listen(port,hostname,backlog,callback-function);

=>example:
    const port = 3000;
    const hostname = '127.0.0.1';        
    const backlog = 100;                 
server.listen(port, hostname, backlog, () => {
console.log(`Server running at http://${hostname}:${port}/ with backlog=${backlog}`);
});

=>Parameters
1. port – The port number the server should listen on (e.g., 3000).

2. hostname (optional) – The host/IP to bind to (default is '0.0.0.0', which means all interfaces).

3. backlog (optional) – Maximum number of queued pending connections (default is 511).

4. callback (optional) – A function to call once the server starts listening.

*/

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request);
  /* the process object is a global object that provides information about, and control over, the current Node.js process. It is automatically available without requiring an import.
  process is built in object and its exit method use to close or exit the server.
   */
  process.exit();
});

const port = 9000;
server.listen(port, () => {
  console.log(`localhost:${port} is running!`);
});
