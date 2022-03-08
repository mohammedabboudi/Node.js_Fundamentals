// the child_process provides a lot of utilities but, the goal of creation a child process based on the main process is to save the latter and distribute workloads among their application threads 

// example of useful methods : exec() , execFile() , spawn () , fork()

const exec = require('child_process').exec;

const child_process = require('child_process');

exec("dir", (err, stdout, stderr)=>{

    if (err) {
        
        console.log(err);

    } else if(stderr){
        
        console.log(stderr);

    }else{

        console.log(stdout);
    }

})