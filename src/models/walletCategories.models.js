'use strict';

import mongoose from 'mongoose';

/*
* Wallet Category Model
* userId: User ID
* categoryType: Wallet Category Type
* categoryName: Wallet Category Name
* categoryDescription: Wallet Category Description
* metadata: Metadata info for Wallet (e.g. Color, Icon)
* isActive: Active Status of Wallet (true/false)
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// Wallet Category Schema
const walletCategorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER',
        required: true
    },
    categoryType: {
        type: String,
        required: true,
        trim: true
    },
    categoryName: {
        type: String,
        required: true
    },
    categoryDescription: {
        type: String,
        required: false
    },
    metadata: {
        type: String,
        required: false
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

// Wallet Category Model
const WalletCategoryModel = mongoose.model('WALLET_CATEGORY', walletCategorySchema);

export default WalletCategoryModel;
