const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/users') {
    
    res.end('Welcome to the Users endpoint.');
  } 
  else if (req.url === '/trainees') {
    
    const filePath = path.join(__dirname, 'task2.html');
  
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Internal Server Error: ${err}`);
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } 
  else {
    res.end('Welcome to the Home page.');
  }
});
server.listen(3002, () => {
  console.log('Server is running on port 3001');
});