const http = require("http");

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Ice cream");
  } else if (req.url === "/ice-cream") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(
      "Thanks for ordering ice-cream from us, please give us rating on google"
    );
  }else{
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Cannot Find the page");}
});

server.listen(port, hostName, () =>
  console.log(`The app is running on port http://${hostName}:${port}`)
);
