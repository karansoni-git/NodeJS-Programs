/*
=> What is request.on("data")?
In Node.js, when you handle an HTTP request (e.g., http.createServer((req, res) => { ... })) , the request body (for POST, PUT, etc.) arrives in chunks — especially for large data.

-> request.on("data", callback) lets you listen for those data chunks as they arrive. 
Purpose: To read the body data piece by piece.

=> The request object (req) is a readable stream. So it emits events like:
-> "data" — when a chunk of data is available
-> "end" — when all chunks have been received

=> req.on("data")	              Fires multiple times if data comes in chunks
=> req.on("end")	              Fires once when all data has been received
*/

const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>User Input</title></head>");
    response.write("<body><center>");
    response.write('<form action="/submitted" method="POST">');
    response.write("<h1>Enter Your Personal Details</h1>");
    response.write('<label for="username">User-Name</label>');
    response.write(
      '<input type="text" id="username" name="username" placeholder="Enter your name"/><br/>'
    );
    response.write("<label>Gender:&nbsp;&nbsp;</label>");
    response.write('<label for="male">Male</label>');
    response.write(
      `<input type="radio" name="gender" id="male" value="male"/>`
    );
    response.write('<label for="female">Female</label>');
    response.write(
      `<input type="radio" name="gender" id="female" value="female"/><br/><br/>`
    );
    response.write('<input type="submit" value="Submit"/>');
    response.write("</form>");
    response.write("</center></body>");
    response.write("</html>");
    return response.end();
  } else if (request.url === "/submitted" && request.method == "POST") {
    //create a empty array for storing chunks
    const body = [];
    request.on("data", (chunk) => {
      //pushing chunks to body array
      body.push(chunk);
    });
    request.on("end", () => {
      //Buffer is a special object type for handling raw binary data in Node.js.
      const fullbody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullbody);
      const finalbody = Object.fromEntries(params);
      fs.writeFileSync("USER-DATA.txt", JSON.stringify(finalbody));
    });
    response.statusCode = 302;
    response.setHeader("Location", "/");
  }
  response.setHeader("Content-Type", "text/html");
  response.write("<html><head><title>Submit Page</title></title></head>");
  response.write("<body><h1>Directed successfully</h1></body>");
  response.write("</html>");
  response.end();
});

const port = 9000;
server.listen(port, () => {
  console.log(`localhost:${port} is running`);
});

/* 
=> What is request.on("end")?
In Node.js, the HTTP request object (req) is a Readable Stream.
When you read data from the request body (POST, PUT, etc.), it usually comes in multiple chunks.

request.on("end", callback) → called once, after all chunks have been received.

So, "end" means: "No more data is coming".

"end" is essential because you usually collect chunks in "data" events, and then process the complete body once all chunks are collected.
*/

/*
=> What is URLSearchParams?
-> URLSearchParams is a built-in class in JavaScript (browser and Node.js)
-> It helps you work with URL query strings easily
-> It parses, reads, modifies, or builds ?key=value&key2=value2 style strings.
-> In Node.js, it’s part of the WHATWG URL API (url module in Node).
*/
