 const fs = require('fs');


 fs.readFile('./Child_Process.js', (err, data)=>{

    if(err) console.log(err);

    console.log(data.toString());
    
 })