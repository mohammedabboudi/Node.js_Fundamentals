const readline = require('readline'); // The readline module provides extra functionalities to handle process.stdin and process.stdout and primarily provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.
const util = require('util'); // The util module supports the needs of Node.js internal APIs. Many of the utilities are useful for application and module developers as well .

const RL = readline.createInterface(process.stdin, process.stdout);

RL.question('what is your name ? ', (name)=>{

    RL.setPrompt(`hey ${name} how old are you ? `);
    RL.prompt();
    RL.on('line', (age)=>{
        if (age >= 18) {

            util.log(`welcome mr ${name} you're eligible because your age is over or equal to 18 .`);
            RL.close();

        } else {

            util.log(`emmm mr ${name} you're not eligible because your age is not over or equal to 18 .`);
            RL.close();

        }
    })
});


