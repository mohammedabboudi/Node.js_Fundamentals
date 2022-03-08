const fs = require('fs'); // the fs module stands for file system.

// read files :

fs.readdir('./app/api', (err, content)=>{

    if(err) console.log(err);
     console.log(content);

});

// read directories :

// fs.readFile('./text.txt', "utf8", (err,data)=>{

//     if(err) console.log("err: " + err);
//             console.log(data);

// });


console.log('working test');

// notice : you should always pay attention of the cwd.