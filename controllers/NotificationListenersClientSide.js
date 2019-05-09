'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToServiceProblemAttributeValueChangeNotification = function listenToServiceProblemAttributeValueChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceProblemAttributeValueChangeNotification(req, res, next);
};

module.exports.listenToServiceProblemCreateNotification = function listenToServiceProblemCreateNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceProblemCreateNotification(req, res, next);
};

module.exports.listenToServiceProblemInformationRequiredNotification = function listenToServiceProblemInformationRequiredNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceProblemInformationRequiredNotification(req, res, next);
};

module.exports.listenToServiceProblemStateChangeNotification = function listenToServiceProblemStateChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceProblemStateChangeNotification(req, res, next);
};
