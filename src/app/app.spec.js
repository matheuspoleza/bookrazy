'use strict';

require('angular');
require('angular-mocks');
window.faker = require('faker');

var testsContext = require.context(".", true, /.spec$/);
testsContext.keys().forEach(testsContext);
