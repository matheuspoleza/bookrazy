;(function(){
  'use strict';
  function listDirective(){
    return {
      restrict: 'AE',
      transclude: true,
      scope: {
        data: '@',
        limit: '@',
        onLoadMore: '@'
      },
      link: function(scope, element, attrs){
        scope.data = data[limit];
      },
      templateUrl: 'app/commons/directives/list.template.html'
    };
  }

  angular.module('book-app').directive('list', listDirective);
})();
