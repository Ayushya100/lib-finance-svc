'use strict';

import { buildApiError } from '../utils/index.js';

const errorHandler = (err, req, res, next) => {
    res.status(err.resCode).json(buildApiError(err));
}

export default errorHandler;
