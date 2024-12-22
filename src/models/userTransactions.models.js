'use strict';

import mongoose from 'mongoose';

/*
* User Transactions Model
* userId: User ID
* categoryId: Category ID
* txnNumber: Transaction Number
* txnDetail: Transaction Detail
* txnDate: Transaction Date
* txnType: Transaction Type (e.g. Expense, Income, Investment, Credit Expense)
* amount: Transaction Amount
* paymentMethod: Payment Method
* paymentToken: Payment Method Token
* tags: Tags applied on transaction
* accountType: Account Type to which amount has been credited.
* account Token: Token of account to which amount has been credited.
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// User Expense Schema
const userTransactionsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER',
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WALLET_CATEGORY'
    },
    txnNumber: {
        type: String,
        required: true,
        trim: true
    },
    txnDetail: {
        type: String,
        required: false
    },
    txnDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    txnType: {
        type: String,
        required: true,
        // enum: ['EXPENSE', 'INCOME', 'INVESTMENT', 'CREDIT_EXPENSE'],
        default: 'EXPENSE',
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentToken: {
        type: String,
        required: true
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER_TAG'
    }],
    accountType: {
        type: String,
        required: true
    },
    accountToken: {
        type: String,
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

// User Expense Model
const UserTransactionsModel = mongoose.model('USER_TRANSACTIONS', userTransactionsSchema);

export default UserTransactionsModel;
