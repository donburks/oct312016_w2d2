const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if (req.url == '/') {
    res.end('<h2 style="font-family: Arial;">Hello World</h2>\n');
  } else {
    res.end(`<h4>You requested ${req.url} with ${req.method}</h4>`);
  }
});

server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});
