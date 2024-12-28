'use strict';

import { logger } from '../utils/index.js';

const buildProjectionFields = (fields) => {
    const fieldsArr = fields.split(' ');
    const projectionFields = fieldsArr.map((field) => {
        return {
            [field]: 1
        };
    });
    return projectionFields;
}

const buildReplacementFields = (userId, fields) => {
    return {
        ...fields,
        modifiedOn: Date.now(),
        modifiedBy: userId
    };
}

const buildOptions = (upsert, projectionFields, isSortable, sortingParam) => {
    const options = {
        upsert: upsert,
        new: true
    };

    if (projectionFields) {
        options['projection'] = buildProjectionFields(projectionFields);
    }
    if (isSortable && sortingParam) {
        options['sort'] = sortingParam;
    }

    return options;
}

/*
* DBTemplate class to build and execute DB query.
* @param {Object} model - the DB model object.
* @param {string} projectionFields - the name of the DB model fields.
* @returns {} - returns nothing.
*/

class DBTemplate {
    constructor(model, projectionFields) {
        this.model = model;
        this.projectionFields = projectionFields;
        this.header = 'DB';
        this.log = logger(this.header);
        this.log.info('Started DB Query Builder');
    }

    logInfo(userId = null, filter = null, updateValues = null, projectionFields = null, upsert = false, isSortable = false, sortingParam = null) {
        if (userId) this.log.info(`User ID : ${userId}`);
        if (filter) this.log.info(`Filter : ${filter}`);
        if (updateValues) this.log.info(`New Values : ${updateValues}`);
        if (projectionFields) this.log.info(`Selected Fields : ${projectionFields}`);
        if (upsert) this.log.info(`Upsert Doc : ${upsert}`);
        if (isSortable) this.log.info(`Sorting applicable : ${isSortable}`);
        if (sortingParam) this.log.info(`Sorting Parameters : ${sortingParam}`);
    }

    logQuery(dbQuery) {
        this.log.debug(`Query: ${JSON.stringify(dbQuery.getQuery(), null, 2)}`);
    }

    async executeQuery(query) {
        this.logQuery(resourceQuery);
        return await query.exec();
    }
}

DBTemplate.prototype.find = async function(filter, customProjectionFields, isSortable = false, sortingParam = null) {
    const projectionFields = customProjectionFields || this.projectionFields;
    const resourceQuery = this.model.find(filter);
    
    if (projectionFields) {
        resourceQuery.select(projectionFields);
    }
    if (isSortable && sortingParam) {
        resourceQuery.sort(sortingParam);
    }

    this.logInfo(null, filter, null, projectionFields, null, isSortable, sortingParam);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.findOne = async function(filter, customProjectionFields) {
    const projectionFields = customProjectionFields || this.projectionFields;
    const resourceQuery = projectionFields ? this.model.findOne(filter).select(projectionFields) : this.model.findOne(filter);
    this.logInfo(null, filter, null, projectionFields);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.findOneAndUpdate = async function(userId, filter, updateValues, customProjectionFields, upsert = false, isSortable = false, sortingParam = null) {
    const projectionFields = customProjectionFields || this.projectionFields;
    const resourceQuery = this.model.findOneAndUpdate(
        filter,
        {
            $set: buildReplacementFields(userId, updateValues)
        },
        buildOptions(upsert, projectionFields, isSortable, sortingParam)
    );

    this.logInfo(userId, filter, updateValues, projectionFields, upsert, isSortable, sortingParam);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.findOneAndReplace = async function(userId, filter, replaceValues, customProjectionFields, upsert = false, isSortable = false, sortingParam = null) {
    const projectionFields = customProjectionFields || this.projectionFields;
    const resourceQuery = this.model.findOneAndReplace(
        filter,
        buildReplacementFields(userId, replaceValues),
        buildOptions(upsert, projectionFields, isSortable, sortingParam)
    );

    this.logInfo(userId, filter, replaceValues, projectionFields, upsert, isSortable, sortingParam);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.findOneAndDelete = async function(filter, customProjectionFields, isSortable = false, sortingParam = null) {
    const projectionFields = customProjectionFields || this.projectionFields;
    const resourceQuery = this.model.findOneAndDelete(
        filter, buildOptions(false, projectionFields, isSortable, sortingParam)
    );

    this.logInfo(null, filter, null, projectionFields, null, isSortable, sortingParam);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.findById = async function(filter, customProjectionFields) {
    const projectionFields = customProjectionFields || this.projectionFields;
    const resourceQuery = projectionFields ? this.model.findById(filter).select(projectionFields) : this.model.findById(filter);
    this.logInfo(null, filter, null, projectionFields);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.findByIdAndUpdate = async function(userId, filter, updateValues, customProjectionFields, upsert = false, isSortable = false, sortingParam = null) {
    const projectionFields = customProjectionFields || this.projectionFields;
    const resourceQuery = this.model.findByIdAndUpdate(
        filter,
        {
            $set: buildReplacementFields(userId, updateValues)
        },
        buildOptions(upsert, projectionFields, isSortable, sortingParam)
    );

    this.logInfo(userId, filter, updateValues, projectionFields, upsert, isSortable, sortingParam);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.findByIdAndDelete = async function(filter, customProjectionFields, isSortable = false, sortingParam = null) {
    const projectionFields = customProjectionFields || this.projectionFields;
    const resourceQuery = this.model.findByIdAndDelete(
        filter, buildOptions(false, projectionFields, isSortable, sortingParam)
    );
    this.logInfo(null, filter, null, projectionFields, null, isSortable, sortingParam);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.updateOne = async function(userId, filter, updateValues, customProjectionFields, upsert = false, isSortable = false, sortingParam = null) {
    const projectionFields = customProjectionFields || this.projectionFields;
    const resourceQuery = this.model.updateOne(
        filter,
        {
            $set: buildReplacementFields(userId, updateValues)
        },
        buildOptions(upsert, projectionFields, isSortable, sortingParam)
    );

    this.logInfo(userId, filter, updateValues, projectionFields, upsert, isSortable, sortingParam);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.updateMany = async function(userId, filter, updateValues, customProjectionFields, upsert = false, isSortable = false, sortingParam = null) {
    const projectionFields = customProjectionFields || this.projectionFields;
    const resourceQuery = this.model.updateMany(
        filter,
        {
            $set: buildReplacementFields(userId, updateValues)
        },
        buildOptions(upsert, projectionFields, isSortable, sortingParam)
    );

    this.logInfo(userId, filter, updateValues, projectionFields, upsert, isSortable, sortingParam);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.replaceOne = async function(userId, filter, replaceValues, customProjectionFields, upsert = false, isSortable = false, sortingParam = null) {
    const projectionFields = customProjectionFields || this.projectionFields;
    const resourceQuery = this.model.replaceOne(
        filter,
        buildReplacementFields(userId, replaceValues),
        buildOptions(upsert, projectionFields, isSortable, sortingParam)
    );

    this.logInfo(userId, filter, replaceValues, projectionFields, upsert, isSortable, sortingParam);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.deleteOne = async function(filter) {
    const resourceQuery = this.model.deleteOne(filter);
    this.logInfo(null, filter);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.deleteMany = async function(filter) {
    const resourceQuery = this.model.deleteMany(filter);
    this.logInfo(null, filter);
    return await this.executeQuery(resourceQuery);
}

DBTemplate.prototype.create = async function(payload) {
    this.logInfo(null, null, payload);
    return await this.model.create(payload);
}

DBTemplate.prototype.bulkWrite = async function(filter) {
    this.logInfo(null, null, payload);
    return await this.model.bulkWrite(filter);
}

export {
    DBTemplate
};
