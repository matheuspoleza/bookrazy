'use strict';

function authorRoute($routeProvider){
  $routeProvider.when('/author/:name', {
    templateUrl: 'app/author/author.template.html',
    controller: 'AuthorController',
    controllerAs: 'authorCtrl'
  });
}

module.exports = authorRoute;
