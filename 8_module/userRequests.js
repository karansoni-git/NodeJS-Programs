const fs = require("fs");

const userRequests = (request, response) => {
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
    const body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
    });
    request.on("end", () => {
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
};

//exporting the function
module.exports = userRequests;
