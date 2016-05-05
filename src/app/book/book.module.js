'use strict';

var controller = require('./book.controller');
var route      = require('./config.route');
var module = angular.module('app.book', []);

module.controller('BookController', ['dataService', controller]);
module.config(['$routeProvider', route]);

module.exports = module;
