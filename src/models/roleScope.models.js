'use strict';

import mongoose from 'mongoose';

/*
* Role Scope model
* roleId: Role ID
* scope: Scope Name
* scopeDescription: Scope Description
* isActive: Active Status of Scope (true/false)
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// Role Scope Schema
const roleScopeSchema = new mongoose.Schema({
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER_ROLE',
        required: true
    },
    scope: {
        type: String,
        required: true,
        trim: true
    },
    scopeDescription: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
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

// Role Scope Model
const RoleScopeModel = mongoose.model('ROLE_SCOPE', roleScopeSchema);

export default RoleScopeModel;
