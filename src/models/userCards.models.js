'use strict';

import mongoose from 'mongoose';

/*
* User Cards Model
* userId: User ID
* accountId: Linked User Account ID
* token: User Card Unique Token
* cardNumber: Unique Card Number (16 digits long)
* cardType: Card Type (e.g. Visa, Mastercard)
* expirationDate: Card Expiration Date (YYYY-MM-DD)
* holderName: Card Holder Name
* balance: Card Balance (if no account linked)
* isActive: Active Status of Card (true/false)
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// User Cards Schema
const userCardsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER',
        required: true
    },
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER_ACCOUNT',
        required: false
    },
    token: {
        type: String,
        unique: true,
        required: true
    },
    cardNumber: {
        type: String,
        unique: true,
        required: true
    },
    cardType: {
        type: String,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    holderName: {
        type: String,
        required: true
    },
    metadata: {
        type: String,
        required: false
    },
    balance: {
        type: Number,
        default: 0
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

// User Cards Model
const UserCardsModel = mongoose.model('USER_CARD', userCardsSchema);

export default UserCardsModel;
