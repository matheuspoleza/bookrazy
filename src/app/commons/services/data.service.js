'use strict';

function dataService(randomService){
  var service = {};
  service.books = [];

  function loadData(){
    for(var i = 1; i < 1000000; i++){
      var genre = randomService.genre();

      var book = {
        id: i,
        genre:  genre,
        image: randomService.image(genre),
        title: randomService.title(),
        author: {
          name: randomService.name(),
          genre: genre
        }
      };

      service.books.push(book);
    }
  }

  service.searchByGenre = function(genre){
    var results = [];
    for(var i = 0; i < service.books.length; i++){
      if(service.books[i].genre === genre){
        results.push(service.books[i]);
      }
    }
    return results;
  };

  service.searchByTitle = function(title){
    var results = [];
    for(var i = 0; i < service.books.length; i++){
      if(service.books[i].title === title){
        results.push(service.books[i]);
      }
    }
    return results;
  };

  service.searchByAuthor = function(author){
    var results = [];
    for(var i = 0; i < service.books.length; i++){
      if(service.books[i].author === author){
        results.push(service.books[i]);
      }
    }
    return results;
  };

  service.getFavorites = function(){
    var results = [];
    for(var i = 0; i < service.books.length; i++){
      if(service.books[i].favorite){
        results.push(service.books[i]);
      }
    }
    return results;
  };

  loadData();
  return service;
}

module.exports = dataService;
