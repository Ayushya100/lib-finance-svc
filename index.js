'use strict';

import dotenv from 'dotenv';

dotenv.config({
    path: './env'
});

import { responseCodes, responseMessage } from './src/assets/response-codes.js';

import {
    ApiError,
    ApiResponse,
    buildApiError,
    buildApiResponse,
    logger
} from './src/utils/index.js';

import { db } from './src/db/index.js';

import {
    ServiceConnection,
    Router
} from './src/templates/index.js';

export {
    responseCodes,
    responseMessage,
    ApiError,
    ApiResponse,
    buildApiError,
    buildApiResponse,
    logger,
    db,
    ServiceConnection,
    Router
};
