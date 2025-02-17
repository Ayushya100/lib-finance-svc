'use strict';

import { performance } from 'perf_hooks';

import { db } from './index.js';
import { logger } from '../utils/index.js';

const exec = async(query) => {
    const log = logger('db');

    log.debug(`Input Query : ${query}`);
    log.info('Query execution begins');

    // Tracker Initiated
    const startMemo = process.memoryUsage().heapUsed / 1024 / 1024;
    const startTime = performance.now();

    const result = await db.execute(query);
    log.info('Query execution completed');
    
    // Tracker Finalized
    const endMemo = process.memoryUsage().heapUsed / 1024 / 1024;
    const endTime = performance.now();

    log.info(`Query execution performance result - Memory Consumption : ${Math.abs((endMemo - startMemo)).toFixed(2)} MB. Time Conumption : ${Math.abs((endTime - startTime)).toFixed(2)} ms`);

    return {
        rowCount: result.rowCount,
        rows: result.rows
    };
}

export default exec;
