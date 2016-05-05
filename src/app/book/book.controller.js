'use strict';

function BookController(dataService){
  var self = this;
  self.isSearching = false;
  self.arrayTest = dataService.books;
  self.results = [];
  self.limit = 100;
  self.authors = ['Mac', 'John', 'Joe'];

  self.search = function(){
    self.isSearching = true;
    self.results = dataService.searchByAuthor(self.searchResults);
    console.log(self.results.length);
  };

  self.changeLimit = function(){
    self.limit = self.limit + 100;
  };
}

module.exports = BookController;
