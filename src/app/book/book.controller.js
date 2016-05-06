'use strict';

function BookController($scope, dataService){
  var self = this;
  var booksLength = 1000000;

  self.shouldCleanList = false;
  self.limit = 100;

  self.books = [];
  self.results = [];

  dataService.loadBooksData(booksLength).then(function(data){
    self.results = data;
  });

  $scope.$on('filterChange', function(event, data){
    if(data === '' || typeof data === 'undefined'){
      self.results = self.books;
      $scope.$apply();
    } else {
      saveBooksData();
      getSearchData(data);
    }
  });

  function saveBooksData(){
    if(self.books.length === 0)
      self.books = self.results;
  }

  function getSearchData(data){
    dataService.searchByTags(data, self.books).then(function(data){
      self.results = data;
    });
  }

  self.search = '';
  self.filters = [
    {
      name: 'studies',
      color: 'orange'
    },
    {
      name: 'animals',
      color: 'blue',
    },
    {
      name: 'horror',
      color: 'black'
    },
    {
      name: 'travels',
      color: 'purple'
    },
    {
      name: 'finance',
      color: 'yellow'
    },
    {
      name: 'foods',
      color: 'red'
    },
    {
      name: 'recommended',
      color: 'green'
    }
  ];

  self.inView = function(index, isVisible, align){
    var lastOneItem = self.limit - 1;
    var firstItem = 1;

    if(index === lastOneItem && align === 'both'){
      self.limit = self.limit + 50;
      self.shouldCleanList = true;
    }

    if(index === firstItem && isVisible && self.shouldCleanList){
      self.limit = 100;
      self.shouldCleanList = false;
    }
  };

  function stopLoading(){
    $('#loader').hide();
  }

  function startLoading(){
    $('#loader').show();
  }

  stopLoading();
}

module.exports = BookController;
