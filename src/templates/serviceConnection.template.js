'use strict';

import axios from 'axios';
import { dbConnection } from '../db/index.js';
import { logger } from '../utils/index.js';

/*
* ServiceConnection class to establish connection with all the services.
* @param {object} config - the configuration object for the service.
* @returns {} - returns nothing.
*/

class ServiceConnection {
    constructor(config) {
        this.service = config;
        this.log = logger('server-connection');
    }
}

/*
* Establishes connection with all the services
* @param {string} serviceName - the name of the service to connect to.
* @returns {} - returns nothing.
*/

ServiceConnection.prototype.buildConnection = function() {
    const serviceConfig = this.service;
    if (!serviceConfig) {
        this.log.error('No service configuration found!');
    }

    const serviceName = serviceConfig.serviceName;
    const HOST = serviceConfig.HOST;
    const PORT = serviceConfig.PORT;
    const app = serviceConfig.app;

    dbConnection().then(() => {
        app.listen(PORT, HOST, () => {
            this.log.info(`[${serviceName}] Server is running on port : ${PORT}`);
        });
    }).catch((err) => {
        this.log.error(`DB Connection Failed!, ${err}`);
    });
}

/*
* Test connection to a service with retries.
* @param {string} serviceName - the name of the service to test the connection.
* @returns {Promise} - Resolves with response data if successful; rejects with an error otherwise.
*/

ServiceConnection.prototype.testConnection = async function() {
    const serviceConfig = this.service;
    if (!serviceConfig) {
        this.log.error('No service configuration found!');
    }

    const serviceName = serviceConfig.serviceName;
    const HOST = serviceConfig.HOST;
    const PORT = serviceConfig.PORT;
    const timeout = serviceConfig.timeout;
    const retries = serviceConfig.retries;

    let response = null;
    let error = null;
    let retry = 0;

    while (retry < retries) {
        try {
            response = await axios.get(`http://${HOST}:${PORT}/${serviceName}/api/v1.0/health`, {
                timeout: timeout
            });
            break;
        } catch (error) {
            this.log.error(`[${serviceName}] Health Check API call failed! Retrying...`);
            error = error;
            retry++;
        }
    }

    if (response) {
        this.log.info(`[${serviceName}] Health check for service succeeded. Status : ${response.status}`);
        return response.data;
    } else {
        this.log.error(`[${serviceName}] Health check for service failed! Error : ${error}`);
        throw new Error('Connection failed!');
    }
}

export { ServiceConnection };
