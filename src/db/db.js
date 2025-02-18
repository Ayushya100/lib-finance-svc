'use strict';

// import { drizzle } from 'drizzle-orm/node-postgres';
// import pkg from 'pg';
import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config({
    path: './env'
});

// Drizzle-orm implementation - deprecated
// const { Pool } = pkg;

// const pool = new Pool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// const db = drizzle(pool);

// Knex.js implementation
const db = knex({
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    pool: {
        min: 2,
        max: 10
    }
});

export default db;
