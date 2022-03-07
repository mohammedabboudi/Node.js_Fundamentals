// the module oject is a pre-defined object in node js which in there is an important object called exports.

const object = require('./exported_file');

//======================== THE FIRST METHOD :

// const emitter = require('./Custom_Events.JS');

// module.exports.name = 'mohammed';

// console.log(module.exports.name);

// console.log(object.name);

// console.log(object.cal(2,3));

// emitter.on('eventCall', ()=>{

//     console.log('call me later !!');
// })

// emitter.emit('eventCall');

//======================== THE second METHOD :

const objectEmitter = require('./Custom_Events.JS');

module.exports.name = 'mohammed';

console.log(module.exports.name);

console.log(object.name);

console.log(object.cal(2,3));

objectEmitter.emitter.on('eventCall', ()=>{

    console.log('call me later !!');
})

objectEmitter.emitter.emit('eventCall');