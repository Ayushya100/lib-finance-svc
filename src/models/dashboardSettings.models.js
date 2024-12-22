'use strict';

import mongoose, { Schema } from 'mongoose';

/*
* Dashboard Settings model
* categoryName: Category Name
* categoryDescription: Category Description
* categoryType: Category Type
* subCategory: Sub Category
* type: Data Type
* isPeriodic: Periodic Status (true/false)
* duration: Duration Type (daily, weekly, monthly, yearly)
* default: Default Value (true/false)
* isUserAssignable: User Assignable Status (true/false)
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// Dashboard Settings Schema
const dashboardSettingsSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryDescription: {
        type: String,
        required: true
    },
    categoryType: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: 'boolean'
    },
    isPeriodic: {
        type: Boolean,
        required: true,
        default: true
    },
    duration: {
        type: String,
        required: false,
        default: 'daily'
    },
    default: {
        type: Schema.Types.Mixed,
        required: true
    },
    isUserAssignable: {
        type: Boolean,
        required: true,
        default: true
    },
    createdOn: {
        type: Date,
        required: false,
        default: Date.now()
    },
    createdBy: {
        type: String,
        required: false,
        trim: true,
        default: 'SYSTEM'
    },
    modifiedOn: {
        type: Date,
        required: false,
        default: Date.now()
    },
    modifiedBy: {
        type: String,
        required: false,
        trim: true,
        default: 'SYSTEM'
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: false
    }
});

// Dashboard Settings Model
const DashboardSettingsModel = mongoose.model('DASHBOARD_SETTINGS', dashboardSettingsSchema);

export default DashboardSettingsModel;
