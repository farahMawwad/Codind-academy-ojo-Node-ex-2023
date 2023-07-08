const http = require('http');

// Create a static array of users
const users = [];

// Create a static array of trainees
const trainees = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Set the response content type to JSON
  res.setHeader('Content-Type', 'application/json');

  // Route handling
  if (url === '/users') {
    if (method === 'GET') {
      // Handle GET request for /users
      res.statusCode = 200;
      res.end(JSON.stringify(users));
    } else if (method === 'POST') {
      // Handle POST request for /users
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        const user = JSON.parse(body);
        users.push(user);
        res.statusCode = 201;
        res.end(JSON.stringify(user));
      });
    } else {
      // Handle unsupported request methods for /users
      res.statusCode = 405;
      res.end('Method Not Allowed');
    }
  } else if (url === '/trainees') {
    if (method === 'GET') {
      // Handle GET request for /trainees
      res.statusCode = 200;
      res.end(JSON.stringify(trainees));
    } else {
      // Handle unsupported request methods for /trainees
      res.statusCode = 405;
      res.end('Method Not Allowed');
    }
  } else if (url === '/additional-endpoint') {
    // Handle additional endpoint
    if (method === 'GET') {
      // Handle GET request for /additional-endpoint
      res.statusCode = 200;
      res.end('Hello from additional endpoint!');
    } else {
      // Handle unsupported request methods for /additional-endpoint
      res.statusCode = 405;
      res.end('Method Not Allowed');
    }
  } else {
    // Handle invalid routes
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});