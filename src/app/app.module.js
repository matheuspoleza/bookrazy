'use strict';

require('./commons/commons.module');
require('./book/book.module');

var dependencies = [
  'ngRoute',
  'angular-inview',
  'app.commons',
  'app.book'
];

angular.module('app', dependencies );
