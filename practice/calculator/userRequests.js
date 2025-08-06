const userRequests = (request, response) => {
  if (request.url == "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>Calculator</title></head>");
    response.write("<body>");
    response.write("<center>");
    response.write("<h1>Welcome to calculator</h1>");
    response.write('<button><a href="/calculator">calculator</a></button>');
    response.write("</h1>");
    response.write("</center></body>");
    response.write("</html>");
    return response.end();
  } else if (request.url == "/calculator") {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>Calculator</title></head>");
    response.write("<body><center>");
    response.write('<form action="/calculate-result" method="POST">');
    response.write(
      '<label for="first number">First Number</label>&nbsp;&nbsp;&nbsp;'
    );
    response.write(
      '<input type="number" name="first" id="first number"/><br/><br/>'
    );
    response.write(
      '<label for="second number">Second Number</label>&nbsp;&nbsp;&nbsp;'
    );
    response.write(
      '<input type="number" name="second" id="second number"/><br/>'
    );
    response.write('<br/><input type="submit" value="Sum"/>');
    response.write("</form>");
    response.write("</center></body>");
    response.write("</html>");
    return response.end();
  } else if (request.url == "/calculate-result" && request.method == "POST") {
    const body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
    });
    request.on("end", () => {
      const fullbody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullbody);
      const finalbody = Object.fromEntries(params);
      const sum = Number(finalbody.first) + Number(finalbody.second);
      response.setHeader("Content-Type", "text/html");
      response.write(`<html>
      <head><title>Result</title></head>
      <body>
      <center>
      <h1>The sum of ${finalbody.first} and ${finalbody.second} : </h1>
      <h2>${sum}</h2>
      </h1>
      </body>
      </html>`);
      return response.end();
    });
  }
  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>404 Error</title></head>");
  response.write("<body>");
  response.write("<center>");
  response.write("<h1>404 Page not found</h1>");
  response.write("</center></body>");
  response.write("</html>");
  response.end();
};

module.exports = userRequests;
