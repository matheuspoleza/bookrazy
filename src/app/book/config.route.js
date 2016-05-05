'use strict';

function timelineRoute($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'app/book/book.template.html',
    controller: 'BookController',
    controllerAs: 'bookCtrl'
  });
}

module.exports = timelineRoute;
