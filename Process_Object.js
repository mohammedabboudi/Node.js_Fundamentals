// the process object has many important properties witch are a set of objects and methods to provides infos about and control over the current node.js process.

// EXAMPLE :

// console.log(process);
// console.log(process.argv);
// console.log(process.argv0);
// console.log(process.execPath);
// console.log(process.argv[1]);
// console.log(process.argv.indexOf('mohamed')); 

process.stdout.write('what is your name ? ');

process.stdin.on('data',(answer)=>{

    console.log(answer);
    console.log(answer.toString().toUpperCase().trim());
    process.exit();

})