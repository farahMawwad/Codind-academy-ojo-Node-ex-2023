const http =require('http')
const fs = require('fs')
let cont=0 ;
fs.readFile('task4.text','utf8',(err,data)=>{
if(err){
    console.log('error when read')
     return;
}
cont=data
})
const server = http.createServer((req,res)=>{
if (req.url=='/file'){
    res.writeHead(200,{ 'Content-Type': 'text/plain' })
    res.end(cont)
}
else{
    res.writeHead(404,{ 'Content-Type': 'text/plain' })
    res.end('not found')
}
})
const port = 3002
server.listen(port,()=>{
    console.log('done')
})