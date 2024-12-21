'use strict';

import mongoose from 'mongoose';
import { DB_NAME } from '../../constants.js';
import logger from '../utils/logger.js';

const log = logger('db-connection');

/*
* Establishes connection with the database.
* @returns {} - returns nothing.
*/

const dbConnection = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        log.info(`Database connection successful: ${connectionInstance.connection.host}:${connectionInstance.connection.port}/${connectionInstance.connection.name}`);
    } catch (error) {
        log.error(`Database connection failed: ${error}`);
        process.exit(1);
    }
}

export default dbConnection;
