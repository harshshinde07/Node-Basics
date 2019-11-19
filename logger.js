let url = 'http://logger.io/log';

const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}
// module.exports.log = log;
//This is better than the above one
module.exports = Logger;
// module.exports.endPoint = url;