// create custom events using events module whie The eventEmitter.on() method is used to register listeners, while the eventEmitter.emit() method is used to trigger the event.

const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('newEvent', (message)=>{

    console.log(`hello ${message}`);

})

emitter.emit('newEvent','mohammed abboudi.');

// this a small demonstration about what can events module can handle, there are a lot more. 