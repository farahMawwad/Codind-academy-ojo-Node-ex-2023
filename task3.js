const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

const port = 8081;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});