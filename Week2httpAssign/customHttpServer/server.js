const http = require("http");
const path = require("path");
const fs = require("fs");
const port = 3000;
const hostName = "localhost";

const server = http.createServer(serverHandler);

// Callback function definition
function serverHandler(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    let filePath = path.resolve(__dirname, 'public/index.html');
    let fileExists = fs.existsSync(filePath);
    if (!fileExists) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <html>
          <body>
            <h3>Page not found</h3>
          </body>
        </html>`);
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream(filePath).pipe(res);
      // The pipe method is used to connect the output of one stream to the input of another. 
      // In this case, it pipes the content read from the file stream 
      // (createReadStream) directly to the HTTP response stream (res)
    }
  } else if (req.method === 'GET' && req.url === "/notes") {
    const notes = [
      {
        id: 1,
        title: "Chinmay Nawkar"
      },
      {
        id: 2,
        title: "Shreyas Shipate"
      }
    ];

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(notes));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: `${req.method} is not supported for ${req.url}` }));
  }
}

server.listen(port, hostName, () => {
  console.log(`Server Running at ${hostName}:${port}`);
});
