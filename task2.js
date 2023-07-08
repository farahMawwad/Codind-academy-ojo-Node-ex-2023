
const fs = require('fs')
const path = require('path');

const data = 'Hello, World!'
fs.writeFile('task2.text',data,(err)=>{
    if (err) {
        console.error('Error writing to file:', err);

      }
      else{ console.log('File write operation complete.')
      
    }

})