'use strict';

import mongoose from 'mongoose';

/*
* User Accounts Model
* userId: User ID
* token: User Account Unique Token
* accountName: User Account Name
* accountNumber: User Unique Account Number (12 - 16 digits long)
* accountType: User Account Type (e.g. Checking, Savings, Credit)
* accountDate: User Account opening Date
* holderName: Account Holder Name
* amount: Amount
* isActive: Active Status of Account (true/false)
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// User Account Schema
const userAccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER',
        required: true
    },
    token: {
        type: String,
        required: true,
        unique: true
    },
    accountName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true,
        unique: true
    },
    accountType: {
        type: String,
        required: true
    },
    accountDate: {
        type: Date,
        required: true
    },
    holderName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 0,
        required: false
    },
    isActive: {
        type: Boolean,
        default: true,
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

// User Account model
const UserAccountModel = mongoose.model('USER_ACCOUNT', userAccountSchema);

export default UserAccountModel;
