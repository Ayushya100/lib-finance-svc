'use strict';

import mongoose from 'mongoose';

/*
* User Role model
* roleCode: Role Code
* roleName: Role Name
* isActive: Active Status (true/false)
* isDefault: Default Role Status (true/false)
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// User Role Schema
const userRoleSchema = new mongoose.Schema({
    roleCode: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        upperCase: true
    },
    roleName: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDefault: {
        type: Boolean,
        default: false
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

// User Role Model
const UserRoleModel = mongoose.model('USER_ROLE', userRoleSchema);

export default UserRoleModel;
