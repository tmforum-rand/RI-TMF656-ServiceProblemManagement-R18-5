'use strict';

var url = require('url');

var ProblemUngroup = require('../service/ProblemUngroupService');

module.exports.createProblemUngroup = function createProblemUngroup (req, res, next) {
  ProblemUngroup.createProblemUngroup(req, res, next);
};
