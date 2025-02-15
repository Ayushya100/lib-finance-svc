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
    buildApiResponse
} from './src/utils/index.js';

export {
    responseCodes,
    responseMessage,
    ApiError,
    ApiResponse,
    buildApiError,
    buildApiResponse
};
