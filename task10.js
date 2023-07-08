const querystring = require('querystring');

const String = "name=value&key=value2";
const parsed = querystring.parse(String);

console.log(parsed);