'use strict';

require('./commons/commons.module');
require('./book/book.module');
require('./author/author.module');

var dependencies = [
  'ngRoute',
  'app.commons',
  'app.book',
  'app.author'
];

angular.module('app', dependencies );
