const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected.');

  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});

server.listen(8082, () => {
  console.log('TCP server is running and listening on port 8080.');
});