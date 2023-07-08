const net = require('net');

const client = net.createConnection({ port: 8045 }, () => {
  console.log('Connected to TCP server.');

  client.write('Hello, server!');
});

client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
});

client.on('end', () => {
  console.log('Disconnected from TCP server.');
});