;(function(){
  'use strict';

  function homeController($scope){
    $scope.isSearching = false;
    $scope.arrayTest = [];
    $scope.results = [];
    $scope.limit = 100;

    for(var i = 1; i < 1000000; i++){
      var item = {
        id: i,
        image: 'assets/images/photo' + Math.floor((Math.random() * 12) + 1) + '.jpg',
        comments: ['Muito legal essa foto'],
        likes: 10
      };
      $scope.arrayTest.push(item);
    }

    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    $scope.search = function(){
      $scope.isSearching = true;
      var results = [];
      var item;
      for (var i = 1; i < $scope.arrayTest.length; i++) {
        item = $scope.arrayTest[i];
        if (item === $scope.searchResults)
          results.push(item);
      }

      $scope.results = results;
    };

    $scope.changeLimit = function(){
      $scope.limit = $scope.limit + 100;
    };

    $scope.hello = 'Hello, Books App';
  }

  angular.module('book-app').controller('homeController', ['$scope', homeController]);
})();
