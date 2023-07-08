const url =require('url');
const url_name =' http://www.example.com:8080/path?query=value#fragment';
const url_pares=url.parse(url_name,true);
const result={
 'protocol': url_pares.protocol,
  'host': url_pares.host,
  'pathname': url_pares.pathname,
 ' search': url_pares.search,
 ' hash': url_pares.hash
}
console.log(result)