'use strict';

import express from 'express';
import rateLimit from 'express-rate-limit';
import * as OpenApiValidator from 'express-openapi-validator';
import { errorHandler } from '../middlewares/index.js';

class App {
    constructor(openapiSpec) {
        this.app = express();

        this.initializeApp();
        this.initializeOpenAPI(openapiSpec);
    }
}

App.prototype.initializeApp = function() {
    this.app.use(express.json({
        limit: '128kb' // Maximum request body size
    }));

    this.app.use(express.urlencoded({
        limit: '64kb',
        extended: false
    }));

    this.app.use(rateLimit({
        windowMs: 10 * 60 * 1000, // 10 minutes max
        max: 200 // Limit each IP to 200 requestes per windowMs
    }));

    this.app.use(express.static('public'));
}

App.prototype.initializeOpenAPI = function(openapiSpec) {
    // Initialize OpenAPI
    this.app.use(OpenApiValidator.middleware({
        apiSpec: openapiSpec,
        validateRequests: true,
        validateResponses: true
    }));
}

App.prototype.registerErrorHandler = function() {
    this.app.use(errorHandler);
}

export { App };
