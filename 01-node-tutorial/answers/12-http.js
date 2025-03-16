const http = require("http");

//* **`` Here is our server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage!");
  } else if (req.url === "/about") {
    res.end("A little about us...");
  } else {
    res.end(`
        <h1>Oops!</h1>
        <p>We can't find that page!</p>
        <a href="/">Return home</a>
        `);
  }
});

//* **`` This is our port
server.listen(3000);
