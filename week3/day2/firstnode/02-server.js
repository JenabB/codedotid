const http = require("http");

const port = process.env.PORT || 3001;

// http server handle request from browser
const server = http.createServer(function (req, res) {
  res.setHeader("Content-Type", "application/json");

  res.end(
    JSON.stringify({
      batch: "Batch#12",
      bootcamp: ["JS", "ReactJS"],
    })
  );
});

server.listen(port);

console.log(`server listening on port ${port}`);
