const fs = require('fs');

// creating directories :

if (!fs.existsSync('createdDirectory')) {

    fs.mkdir('createdDirectory', (err)=>{

        if (err) {
            console.log(err);
        }
        console.log('the directory has been created');
    })

}else {

    console.log('the directory is already exist');
}