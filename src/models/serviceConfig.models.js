'use strict';

import mongoose from 'mongoose';

/*
* Service Config model
* microservice: Microservice Name
* environment: Environment Name
* protocol: Protocol
* port: Port Number
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// Service Config Schema
const serviceConfigSchema = new mongoose.Schema({
    microservice: {
        type: String,
        required: true
    },
    environment: {
        type: String,
        required: true
    },
    protocol: {
        type: String,
        required: true
    },
    port: {
        type: Number,
        required: true
    },
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

// Service Config Model
const ServiceConfigModel = mongoose.model('SERVICE_CONFIGS', serviceConfigSchema);

export default ServiceConfigModel;
