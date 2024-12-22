'use strict';

import mongoose from 'mongoose';

/*
* User Tags Model
* userId: User ID
* tagName: Tag Name
* tagDescription: Tag Description
* metadata: Metadata info for Tag (e.g. Color, Icon)
* createdOn: Created Date
* createdBy: Created By
* modifiedOn: Modified Date
* modifiedBy: Modified By
* isDeleted: Delete Status
*/

// User Tags Schema
const userTagsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER',
        required: true
    },
    tagName: {
        type: String,
        required: true
    },
    tagDescription: {
        type: String,
        required: false
    },
    metadata: {
        type: String,
        required: false
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

// User Tags Model
const UserTagsModel = mongoose.model('USER_TAG', userTagsSchema);

export default UserTagsModel;
