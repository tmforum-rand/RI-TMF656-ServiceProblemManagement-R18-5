'use strict';

var url = require('url');

var ProblemGroup = require('../service/ProblemGroupService');

module.exports.createProblemGroup = function createProblemGroup (req, res, next) {
  ProblemGroup.createProblemGroup(req, res, next);
};
