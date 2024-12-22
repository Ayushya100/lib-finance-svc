'use strict';

import mongoose from 'mongoose';

/*
* User Metadata model
* userId: User ID
* verificationCode: Verification Code
* verificationCodeExpiry: Verification Code Expiry Date
* forgotPasswordToken: Forgot Password Token
* forgotPasswordTokenExpiry: Forgot Password Token Expiry Date
* refreshToken: Refresh Token
*/

// User Metadata Schema
const userMetadataSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER',
        required: true
    },
    verificationCode: {
        type: String,
        required: false
    },
    verificationCodeExpiry: {
        type: Date,
        required: false
    },
    forgotPasswordToken: {
        type: String,
        required: false
    },
    forgotPasswordTokenExpiry: {
        type: Date,
        required: false
    },
    refreshToken: {
        type: String,
        required: false
    }
});

// User Metadata Model
const UserMetadataModel = mongoose.model('USER_METADATA', userMetadataSchema);

export default UserMetadataModel;
