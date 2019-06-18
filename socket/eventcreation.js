var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log("listenere1 executed");
}

var listener2 = function listener2() {
    console.log("listenere2 executed");
}

eventEmitter.addListener('connection', listener1);

eventEmitter.addListener('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listeners listening to connection event");

eventEmitter.emit('connection');