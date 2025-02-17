'use strict';

import { logger } from '../utils/index.js';

/*
* Controller class to log incoming operation details.
* @param {string} header - the name of the controller.
* @returns {} - returns nothing.
*/

class Controller {
    constructor(header) {
        this.header = header;

        let msg = this.header.split('-');
        msg = msg.length > 0 ? msg.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ') : msg;
        msg = `${msg} Controller started.`;

        this.log = logger(`Controller : ${this.header}`);
        this.msg = msg;
    }
}

/*
* Logs controller operation execution message.
* @param {} - accepts nothing.
* @returns {} - returns nothing.
*/

Controller.prototype.logMsg = function() {
    this.log.info(this.msg);
}

/*
* Logs incoming message details.
* @param {string} type - the type of log message.
* @param {string} msg - the message to log.
* @returns {} - returns nothing.
*/

Controller.prototype.logInfo = function(type, msg) {
    if (type === 'info') {
        this.log.info(msg);
    } else if (type === 'debug') {
        this.log.debug(msg);
    } else if (type === 'warning') {
        this.log.warning(msg);
    } else if (type === 'success') {
        this.log.success(msg);
    } else {
        this.log.error(msg);
    }
}

export { Controller };
