const dns = require('dns');

const hostname = 'www.google.com';

dns.resolve(hostname, (error, addresses) => {
  if (error) {
    console.error(`Error resolving ${hostname}: ${error.message}`);
    return;
  }

  console.log(`${hostname} resolves to: ${addresses}`);
});