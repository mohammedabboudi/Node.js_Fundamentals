const fs = require('fs');

// deleting directories :

if (fs.existsSync('removedDirectory')) {
    
    fs.rmdirSync('removedDirectory');
    console.log('the directory has been deleted successfully');

}else{

    console.log('there is no directory with this name to remove');
    
}

// deleting files :

if (fs.existsSync('removedDirectory/removedFile.js')) {

    try {
        
        fs.unlinkSync('./removedDirectory/removedFile.js');
        console.log('the file has been removed successfuly');

    } catch (error) {

        console.log(error);
    }
    
} else {

    console.log('there is no such file with this name');
    
}