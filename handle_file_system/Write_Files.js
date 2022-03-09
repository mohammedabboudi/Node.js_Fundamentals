const fs = require('fs');

// create a file and append data to it.

fs.writeFile('createdFile.txt', 'hello mohammed you created this file using writeFile.', 'utf-8', (err)=>{

    if (err) {
        console.log(err);
    }
    console.log('the file has been created successfully');
})

// append data to the file :

fs.appendFile('./createdFile.txt', '\nhello again these are extra stuf added to the file using appendFile', 'utf-8', (err)=>{

    if (err) {
        console.log(err);
    }
    console.log('extra stuff are added successfully')
})

