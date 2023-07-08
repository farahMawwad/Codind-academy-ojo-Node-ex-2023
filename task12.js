const { spawn } = require('child_process');

const command = 'ping';
const args = ['www.google.com'];

const childProcess = spawn(command, args);

childProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

childProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});

childProcess.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});