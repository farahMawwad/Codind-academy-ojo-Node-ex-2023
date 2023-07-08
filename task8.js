const crypto = require('crypto');

const randomBytes = crypto.randomBytes(1);
const randomNumber = parseInt(randomBytes.toString('hex'),16);

console.log(randomNumber);