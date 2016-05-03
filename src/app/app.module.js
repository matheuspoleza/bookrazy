;(function(){
  'use strict';

  angular.module('book-app', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
       .when('/', {
        templateUrl: 'app/home/home.template.html',
        controller: 'homeController'
      });
    });
})();
