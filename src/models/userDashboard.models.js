'use strict';

import mongoose, { Schema } from 'mongoose';

/*
* User Dashboard model
* userId: User ID
* settingId: Dashboard Setting ID
* type: Data Type (Boolean, Number, String, Date) - Default: Boolean
* value: Value of the Setting
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// User Dashboard Schema
const userDashboardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER',
        required: true
    },
    settingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DASHBOARD_SETTINGS',
        required: true
    },
    type: {
        type: String,
        required: true,
        default: 'Boolean'
    },
    value: {
        type: Schema.Types.Mixed,
        required: true
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

// User Dashboard Model
const UserDashboardModel = mongoose.model('USER_DASHBOARD', userDashboardSchema);

export default UserDashboardModel;
