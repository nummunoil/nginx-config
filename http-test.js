const http = require("http");

const hostname = "0.0.0.0";
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello World! Hello Test!! \n");
  res.write("query string is... \n");
  res.end(req.url);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
