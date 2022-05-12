const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('meetingevent', () => {
    console.log('Please turn on mice');
    setTimeout(() => {
        console.log("Please turn on your mice You are on mute");
    }, 3000)

});
myEmitter.emit('meetingevent');