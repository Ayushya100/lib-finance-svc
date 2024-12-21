'use strict';

import { buildApiError } from '../utils/index.js';
import { responseCodes } from '../assets/response/response-codes.js';

/*
* Error handler middleware to handle all the errors.
* @param {object} err - the error object.
* @param {object} req - the request object.
* @param {object} res - the response object.
* @param {object} next - the next flag.
*/

const errorHandler = (err, req, res, next) => {
    res.status(responseCodes[err.resType]).json(buildApiError(err));
}

export default errorHandler;
