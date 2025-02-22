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

import { exec } from './src/db/index.js';

import {
    ServiceConnection,
    Router,
    Controller,
    App
} from './src/templates/index.js';

import {
    errorHandler,
    paramValidator
} from './src/middlewares/index.js';

export {
    responseCodes,
    responseMessage,
    ApiError,
    ApiResponse,
    buildApiError,
    buildApiResponse,
    logger,
    exec,
    ServiceConnection,
    Router,
    Controller,
    errorHandler,
    paramValidator,
    App
};
