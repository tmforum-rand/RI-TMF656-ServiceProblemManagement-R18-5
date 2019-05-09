'use strict';

var url = require('url');

var ServiceProblem = require('../service/ServiceProblemService');

module.exports.createServiceProblem = function createServiceProblem (req, res, next) {
  ServiceProblem.createServiceProblem(req, res, next);
};

module.exports.deleteServiceProblem = function deleteServiceProblem (req, res, next) {
  ServiceProblem.deleteServiceProblem(req, res, next);
};

module.exports.listServiceProblem = function listServiceProblem (req, res, next) {
  ServiceProblem.listServiceProblem(req, res, next);
};

module.exports.patchServiceProblem = function patchServiceProblem (req, res, next) {
  ServiceProblem.patchServiceProblem(req, res, next);
};

module.exports.retrieveServiceProblem = function retrieveServiceProblem (req, res, next) {
  ServiceProblem.retrieveServiceProblem(req, res, next);
};
