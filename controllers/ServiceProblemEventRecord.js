'use strict';

var url = require('url');

var ServiceProblemEventRecord = require('../service/ServiceProblemEventRecordService');

module.exports.listServiceProblemEventRecord = function listServiceProblemEventRecord (req, res, next) {
  ServiceProblemEventRecord.listServiceProblemEventRecord(req, res, next);
};

module.exports.retrieveServiceProblemEventRecord = function retrieveServiceProblemEventRecord (req, res, next) {
  ServiceProblemEventRecord.retrieveServiceProblemEventRecord(req, res, next);
};
