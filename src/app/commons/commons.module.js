'use strict';

var itemComponent = require('./directives/item.component');
var filterComponent = require('./directives/filter.component');
var dataService   = require('./services/data.service');
var randomService = require('./services/random.service');

var commonsModule = angular.module('app.commons', []);

commonsModule.service('randomService', randomService);
commonsModule.service('dataService', ['$q', 'randomService', dataService]);
commonsModule.directive('item', itemComponent);
commonsModule.directive('filter', filterComponent);

module.exports = commonsModule;
