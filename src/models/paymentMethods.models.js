'use strict';

import mongoose, { Schema } from 'mongoose';

/*
* Payment Methods Model
* userId: User ID
* accountId: Linked User Account ID
* token: User Payment Method Unqiue Token
* paymentName: Payment Name
* paymentNumber: Unique Payment Number
* paymentMethod: Payment Method (e.g. CASH, UPI, NetBanking, MobileBanking)
* balance: Payment Method Balance (if no account linked)
* isActive: Active Status of Payment Method (true/false)
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// Payment Methods Schema
const paymentMethodsSchema = new mongoose.Schema({
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
    paymentName: {
        type: String,
        required: true
    },
    paymentNumber: {
        type: Schema.Types.Mixed,
        required: false
    },
    paymentMethod: {
        type: String,
        // enum: ['CASH', 'UPI', 'WALLET', 'INTERNET-BANKING', 'MOBILE-BANKING', 'CHEQUE', 'DEMAND-DRAFT'],
        required: true
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
        trim: true,
        required: false
    },
    modifiedOn: {
        type: Date,
        required: false,
        default: Date.now()
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

// Payment Methods Model
const PaymentMethodsModel = mongoose.model('PAYMENT_METHOD', paymentMethodsSchema);

export default PaymentMethodsModel;
