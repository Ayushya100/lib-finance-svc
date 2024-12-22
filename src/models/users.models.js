'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../../constants.js';

/*
* User model
* roleId: Role ID
* firstName: First Name
* lastName: Last Name
* userName: User Name
* emailId: Email ID
* password: Password
* isVerified: Email Verification Status
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// Users Schema
const userSchema = new mongoose.Schema({
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER_ROLE',
        required: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    emailId: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: true
    },
    gender: {
        type: String,
        required: false
    },
    dob: {
        type: Date,
        required: false
    },
    contactNumber: {
        type: Number,
        trim: true,
        required: false
    },
    profileImageURL: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    lastLogin: {
        type: Date,
        required: false
    },
    loginCount: {
        type: Number,
        default: 0
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    createdOn: {
        type: Date,
        default: Date.now(),
        required: false
    },
    createdBy: {
        type: String,
        default: 'SYSTEM',
        trim: true,
        required: false
    },
    modifiedOn: {
        type: Date,
        default: Date.now(),
        required: false
    },
    modifiedBy: {
        type: String,
        default: 'SYSTEM',
        trim: true,
        required: false
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: false
    }
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    next();
});

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

// Users Model
const UserModel = mongoose.model('USER', userSchema);

export default UserModel;
