'use strict';

var url = require('url');

var ProblemUnacknowledgement = require('../service/ProblemUnacknowledgementService');

module.exports.createProblemUnacknowledgement = function createProblemUnacknowledgement (req, res, next) {
  ProblemUnacknowledgement.createProblemUnacknowledgement(req, res, next);
};
