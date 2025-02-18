'use strict';

import { logger } from '../utils/index.js';

const log = logger('para-validation');

const paramValidator = async(req, res, next) => {
    try {
        log.info('Input parameter field values validation started...');
        const params = req.params;
        const paramKeys = Object.keys(params);

        if (paramKeys.length > 0) {
            for (const key of paramKeys) {
                let uuid = params[key];

                if (uuid.length !== 38) {
                    log.error(`Invalid ${key} length passed to the api call`);
                    return next({
                        resCode: 400,
                        resMsg: `Invalid ${key} format.`,
                        isValid: false
                    });
                }

                uuid = uuid.slice(6);

                if (!(/^[A-F0-9]{32}$/.test(uuid))) {
                    log.error(`Invalid UUID format provided for ${key}.`);
                    return next({
                        resCode: 400,
                        resMsg: `Invalid UUID format provided for ${key}.`,
                        isValid: false
                    });
                }
            }
        }

        log.success('Input parameter field validation completed successfully');
        next();
    } catch (err) {
        log.error(`Error occurred while validating passed parameters to the api. Error : ${err}`);
        next({
            resCode: 500,
            resMsg: 'Error occurred while validating the passed parameters to the api.',
            stack: err.stack,
            isValid: false
        });
    }
}

export default paramValidator;
