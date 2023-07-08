const fs = require ('fs')
fs.readFile('task1.text','utf8',(err,data)=>{
    if(err)
    console.error('Error reading the file:', err);
    console.log(data)
    
})
//////////////////////////////
