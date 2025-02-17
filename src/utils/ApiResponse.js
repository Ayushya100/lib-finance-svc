'use strict';

import { responseCodes, responseMessage } from '../assets/response-codes.js';

/*
* ApiResponse class to handle all the responses.
* @param {number}
* @param {string}
* @param {object}
* @param {string}
* @returns {} - returns nothing.
*/

class ApiResponse {
    constructor (
        statusCode,
        type,
        data,
        message = 'Success',
        devMessage = 'SUCCESS'
    ) {
        this.statusCode = statusCode;
        this.type = type;
        this.data = data;
        this.message = message;
        this.devMessage = devMessage;
        this.success = statusCode < 400;
    }
}

/*
* Builds the response object.
* @param {object} res - the response object.
* @param {ApiResponse} apiResponse - the api response object.
* @returns {object} - returns the response object.
*/

const buildApiResponse = (res) => {
    const apiResponse = new ApiResponse(
        res.resCode || 400,
        responseCodes[res.resCode],
        res.data || [],
        res.resMsg,
        responseMessage[res.resCode]
    );

    return apiResponse;
}

export { ApiResponse, buildApiResponse };
