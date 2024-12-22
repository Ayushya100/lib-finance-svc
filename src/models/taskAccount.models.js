'use strict';

import mongoose from 'mongoose';

/*
* Task Account Schema
*/

// Task Account Schema
const taskAccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER',
        required: true
    },
    debitFrom: {
        type: String,
        required: true
    },
    creditTo: {
        type: String,
        required: true
    },
    taskType: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    durationCount: {
        type: Number,
        required: true
    },
    interestApplicable: {
        type: Boolean,
        default: true
    },
    interestRate: {
        type: Number,
        required: false
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Schema.Types.Mixed,
        required: false
    },
    afterEndDepositTo: {
        type: Schema.Types.Mixed,
        required: false
    },
    nextDepositDate: {
        type: Date,
        required: true
    },
    createdOn: {
        type: Date,
        required: false,
        default: Date.now()
    },
    createdBy: {
        type: String,
        default: 'SYSTEM',
        required: false,
        trim: true
    },
    modifiedOn: {
        type: Date,
        required: false,
        default: Date.now()
    },
    modifiedBy: {
        type: String,
        default: 'SYSTEM',
        required: false,
        trim: true
    },
    isDeleted: {
        type: Boolean,
        required: false,
        default: false
    }
});

// Task Account Model
const TaskAccountModel = mongoose.model('TASK_ACCOUNT', taskAccountSchema);

export default TaskAccountModel;
