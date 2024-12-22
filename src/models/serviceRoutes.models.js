'use strict';

import mongoose from 'mongoose';

/*
* Service Routes model
* routeName: Route Name
* routePath: Route Path
* microservice: Microservice Name
* port: Microservice Port
* method: Request Method
* validations: Request Validations
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// Service Routes Schema
const serviceRoutesSchema = new mongoose.Schema({
    routeName: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    microservice: {
        type: String,
        required: true
    },
    port: {
        type: Number,
        required: true
    },
    method: {
        type: String,
        enum: ['GET', 'POST', 'PUT', 'DELETE'],
        default: 'GET'
    },
    validations: [{
        type: String,
        required: false
    }],
    createdOn: {
        type: Date,
        default: Date.now(),
        required: false
    },
    createdBy: {
        type: String,
        default: 'SYSTEM',
        trim: true,
        required: false
    },
    modifiedOn: {
        type: Date,
        default: Date.now(),
        required: false
    },
    modifiedBy: {
        type: String,
        default: 'SYSTEM',
        trim: true,
        required: false
    },
    isDeleted: {
        type: Boolean,
        required: false,
        default: false
    }
});

// Service Routes Model
const ServiceRoutesModel = mongoose.model('SERVICE_ROUTES', serviceRoutesSchema);

export default ServiceRoutesModel;
