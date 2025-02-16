'use strict';

import { logger } from '../utils/index.js';

/*
* Router class to log incoming request details.
* @param {string} header - the name of the router.
* @returns {} - returns nothing.
*/

class Router {
    constructor(header) {
        this.header = header;

        let msg = this.header.split('-');
        msg = msg.length > 0 ? msg.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ') : msg;
        msg = `${msg} Router started.`;

        this.log = logger(`Router : ${this.header}`);
        this.log.info(msg);
    }
}

/*
* Logs incoming request details.
* @param {Object} req - the request object.
* @returns {} - returns nothing.
*/

Router.prototype.logRequest = function(req) {
    this.log.info(`Incoming request : ${req.method} - ${req.originalUrl}`);

    if (Object.keys(req.params).length > 0) {
        this.log.info(`Request parameters : ${JSON.stringify(req.params)}`);
    }

    if (Object.keys(req.query).length > 0) {
        this.log.info(`Request query : ${JSON.stringify(req.query)}`);
    }
}

/*
* Logs incoming request details.
* @param {string} type - the type of log message.
* @param {string} msg - the message to log.
* @returns {} - returns nothing.
*/

Router.prototype.logInfo = function(type, msg) {
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

export { Router };
