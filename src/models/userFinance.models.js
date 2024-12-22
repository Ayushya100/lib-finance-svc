'use strict';

import mongoose from 'mongoose';

/*
* User Finance model
* userId: User ID
* availableFunds: Available Funds in User Account
* lifeTimeIncome: Life Time Income of User Account
* lifeTimeInvestment: Life Time Investment of User Account
* lifeTimeExpenditure: Life Time Expenditure of User Account
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status of User Account
*/

// User Finance Schema
const userFinanceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER',
        required: true
    },
    availableFunds: {
        type: Number,
        required: true,
        default: 0
    },
    lifeTimeIncome: {
        type: Number,
        required: true,
        default: 0
    },
    lifeTimeInvestment: {
        type: Number,
        required: true,
        default: 0
    },
    lifeTimeExpenditure: {
        type: Number,
        required: true,
        default: 0
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

// User Finance Model
const UserFinanceModel = mongoose.model('USER_FINANCE_INFO', userFinanceSchema);

export default UserFinanceModel;
