var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('learn', function (name) {
    console.log(name, 'is learning Node js')
})
// eventEmitter.emit('learn', 'kajal');
// var EventEmitter = require('node:events');
// class Myemitter extends EventEmitter { }
// var myEmitter = new Myemitter();
// myEmitter.on('laern', () => {
//     console.log('learn node js')
// })
// myEmitter.emit('learn');


