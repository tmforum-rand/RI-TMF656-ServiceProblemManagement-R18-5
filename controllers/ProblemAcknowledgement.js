'use strict';

var url = require('url');

var ProblemAcknowledgement = require('../service/ProblemAcknowledgementService');

module.exports.createProblemAcknowledgement = function createProblemAcknowledgement (req, res, next) {
  ProblemAcknowledgement.createProblemAcknowledgement(req, res, next);
};
