const http = require("http");
const userRequests = require("./userRequests");
const server = http.createServer(userRequests);

const port = 9000;

server.listen(port, () => {
  console.log(`localhost:${port} is started`);
});
