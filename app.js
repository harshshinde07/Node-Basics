// const log = require('./logger');

// log('Message');

// ---Path module---
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);

// ---OS module---
const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`Total memory: ${totalMemory}\n Free memory: ${freeMemory}`);

// ---File system module---
const fs = require('fs');

// Synchronous - NOT Preferred 
// const files = fs.readdirSync(__dirname);
// console.log(files);

// Asynchronous - Preferred
fs.readdir('./', function (err, files) {
    if (err) console.log('Error: ', err);
    else console.log(files);
});

// ---Event module---
const EventEmitter = require('events');
// const emitter = new EventEmitter();

//Register a listener => is arrow function
// emitter.on('messageLogged', (arg) => {
//     //TODO once the event is raised
//     console.log('Listener called', arg);
// });

// Raise event {} => event arguments
// emitter.emit('messageLogged', {id: 1, url: 'http://'});

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    //TODO once the event is raised
    console.log('Listener called', arg);
});

logger.log('message');

// ---HTTP module---
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Welcome to Home!');
        res.end();
    }
    if (req.url == '/home/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
}); // is an EventEmitter

// server.on('connection', (socket) => {
//     console.log('New connection...')
// });
server.listen(3000);
console.log('Listening on port 3000');
