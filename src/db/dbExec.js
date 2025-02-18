'use strict';

import { performance } from 'perf_hooks';

import { db } from './index.js';
import { logger } from '../utils/index.js';

const log = logger('db');

const exec = async(query, params = []) => {
    try {
        log.debug(`Input Query : ${query}`);
        log.debug(`Input params : ${params}`);
        log.info('Query execution begins');

        // Tracker Initiated
        const startMemo = process.memoryUsage().heapUsed / 1024 / 1024;
        const startTime = performance.now();

        // Drizzle-orm implementation - deprecated
        // let result = null;
        // if (params.length > 0) {
        //     result = await db.execute(query, params);
        // } else {
        //     result = await db.execute(query);
        // }
        
        // Knex.js implementation - in use
        let result = await db.raw(query, params);
        log.info('Query execution completed');
        
        // Tracker Finalized
        const endMemo = process.memoryUsage().heapUsed / 1024 / 1024;
        const endTime = performance.now();

        log.info(`Query execution performance result - Memory Consumption : ${Math.abs((endMemo - startMemo)).toFixed(2)} MB. Time Conumption : ${Math.abs((endTime - startTime)).toFixed(2)} ms`);

        return {
            rowCount: result.rowCount,
            rows: result.rows
        };
    } catch (err) {
        log.error(`Error occurred while executing the query! Error : ${err}`);
        return null;
    }
}

export default exec;
