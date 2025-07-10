/*
=> What is a Module in Node.js?
In Node.js, a module is simply:
-> A reusable block of code — a file that exports something so other files can import it.

=> Purpose:
1. Split large code into smaller files.
2. Reuse code easily.
3. Encapsulate logic.

-> Node.js uses a module system based on CommonJS (CJS) and also supports ECMAScript Modules (ESM).

=> CommonJS Module System (Most common)
Uses require to import
Uses module.exports or exports to export

=> ECMAScript Modules (ESM)
Modern alternative (like in browsers).
Uses import and export keywords.
You must use .mjs extension OR set "type": "module" in package.json.
*/

const http = require("http");
//importing the local module
const userRequests = require("./userRequests");

const server = http.createServer(userRequests);

const port = 9000;
server.listen(port, () => {
  console.log(`localhost:${port} is running`);
});
