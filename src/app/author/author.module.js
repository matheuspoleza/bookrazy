'use strict';

var controller = require('./author.controller');
var route      = require('./config.route');

var module = angular.module('app.user', []);

module.controller('AuthorController', ['$routeParams', AuthorController]);
module.config(['$routeParams', route]);

module.exports = module;
