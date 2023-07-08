const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/users') {

        res.end('Welcome to the Users endpoint.');
      } else {

        res.end('Welcome to the Home page.');
      }
    });

    server.listen(3000, () => {
      console.log('Server is running on port 3000');
    });






