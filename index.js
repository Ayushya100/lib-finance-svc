'use strict';

import dotevn from 'dotenv';

dotevn.config({
    path: './.env'
});

import { dbConnection } from './src/db/index.js';

import { responseCodes, responseMessage } from './src/assets/response/response-codes.js';

import {
    ApiError,
    ApiResponse,
    buildApiError,
    buildApiResponse,
    logger
} from './src/utils/index.js';

import {
    ServiceConnection,
    Router
} from './src/templates/index.js';

import {
    errorHandler
} from './src/middlewares/index.js';

export {
    dbConnection,
    responseCodes,
    responseMessage,
    ApiError,
    ApiResponse,
    buildApiError,
    buildApiResponse,
    logger,
    ServiceConnection,
    Router,
    errorHandler
};
