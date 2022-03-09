const fs = require('fs');

// renaiming files :

if (fs.existsSync('./renaimed_moved_file.txt')) {

    try {
        
        fs.renameSync('./renaimed_moved_file.txt', './renaimed_moved_file1.txt');
        console.log('the file has been renaimed.');

    } catch (error) {
        
        console.log(error);

    }
    

} else {
    
    console.log('there is no file with this name exist in this directory');

}


// moving files :


if (fs.existsSync('./renaimed_moved_file.txt')) {

    try {
        
        fs.renameSync('./renaimed_moved_file.txt', './renaimed_moved_directory/renaimed_moved_file.txt');
        console.log('the file has been moved');

    } catch (error) {
        
        console.log(error);

    }
    

} else {
    
    console.log('there is no file with this name exist in this directory');

}


// renaiming directories :


if (fs.existsSync('./renaimed_moved_directory/childDirectory')) {

    try {
        
        fs.renameSync('./renaimed_moved_directory/childDirectory', './renaimed_moved_directory/parentDirectory');
        console.log('the directory has been renaimed.');

    } catch (error) {
        
        console.log(error);

    }
    

} else {
    
    console.log('there is no directory with this name exist in this directory');

}


// moving directories :


if (fs.existsSync('./renaimed_moved_directory/childDirectory')) {

    try {
        
        fs.renameSync('./renaimed_moved_directory/childDirectory', './childDirectory');
        console.log('the directory has been moved.');

    } catch (error) {
        
        console.log(error);

    }
    

} else {
    
    console.log('there is no directory with this name exist in this directory');

}