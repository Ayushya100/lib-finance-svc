'use strict';

import axios from 'axios';
import os from 'os';
import { logger } from '../utils/index.js';
import { generalServiceConfig } from '../../constants.js';

/*
* ServiceConnection class to establish connection with all the services.
* @param {object} config - the configuration object for the service.
* @returns {} - returns nothing.
*/

class ServiceConnection {
    constructor(config) {
        this.service = config;
        this.log = logger('service-connection');
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

    app.listen(PORT, HOST, () => {
        this.log.info(`[${serviceName}] Server is running on port : ${PORT}`);
        this.log.info(`Uptime : ${process.uptime()} seconds | Timestamp : ${Date.now()} | Hostname : ${os.hostname()}`);
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
    const HOST = serviceConfig.HOST || 'localhost';
    const PORT = serviceConfig.PORT || '3200';
    const PROTOCOL = serviceConfig.PROTOCOL || 'http';
    const timeout = generalServiceConfig.timeout;
    const retries = generalServiceConfig.retries;

    let response = null;
    let error = null;
    let retry = 0;

    while (retry < retries) {
        try {
            const API = `${PROTOCOL}://${HOST}:${PORT}/${serviceName}/api/v1.0/health`;
            response = await axios.get(API, {
                timeout: timeout
            });
            break;
        } catch (err) {
            if (retry < retries) {
                this.log.error(`[${serviceName}] Health Check API call failed! Retrying...`);
            } else {
                this.log.error(`[${serviceName}] Health Check API call failed!`);
            }
            error = err;
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
