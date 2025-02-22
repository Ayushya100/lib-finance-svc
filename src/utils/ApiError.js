'use strict';

import { responseCodes, responseMessage } from '../assets/response-codes.js';

/*
* ApiError class to handle all the errors.
* @param {number}
* @param {string}
* @param {string}
* @param {array}
* @param {string}
* @param {object}
* @returns {} - returns nothing.
*/

class ApiError extends Error {
    constructor (
        statusCode,
        message = 'An error occurred while processing the request.',
        devMessage = 'An error occurred while processing the request.',
        type = 'INTERNAL_SERVER_ERROR',
        errors = [],
        stack = '',
        data = []
    ) {
        super(message);
        this.message = message;
        this.devMessage = devMessage;
        this.statusCode = statusCode;
        this.type = type;
        this.errors = errors;
        this.data = data;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

/*
* Builds the error object.
* @param {object} err - the error object.
* @returns {object} - returns the error object.
*/

const buildApiError = (err) => {
    const apiError = new ApiError(
        err.status || 500,
        err.message,
        responseMessage[err.status],
        responseCodes[err.status],
        err.errors,
        err.stack,
        err.data
    );

    return apiError;
}

export { ApiError, buildApiError };
