//basic routing

const http = require("http");

const port = process.env.PORT || 3001;

// http server handle request from browser
const server = http.createServer(function (req, res) {
  if (req.url === "/") return responseText(req, res);
  if (req.url === "/json") return responseJson(req, res);

  responseNotFound(req, res);
});

function responseText(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hi Bootcamp");
}

function responseJson(req, res) {
  res.setHeader("Content-Type", "application/json");

  res.end(
    JSON.stringify({
      batch: "Batch#12",
      bootcamp: ["JS", "ReactJS"],
    })
  );
}

function responseNotFound(req, res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("not found");
}

server.listen(port);

console.log(`server listening on port ${port}`);
