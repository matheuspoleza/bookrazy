'use strict';

var itemComponent = require('./directives/item.component');
var dataService   = require('./services/data.service');
var randomService = require('./services/random.service');

var commonsModule = angular.module('app.commons', []);

commonsModule.service('randomService', randomService);
commonsModule.service('dataService', ['randomService', dataService]);
commonsModule.directive('item', itemComponent);

module.exports = commonsModule;
