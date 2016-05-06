'use strict';

function dataService($q, randomService){
  var service = {};

  service.loadBooksData = function(length){
    var deferred = $q.defer();
    var books = [];

    for(var i=0, len=length + 1; i<len; i++){

      if(i === length){
        deferred.resolve(books);
        break;
      }

      var genre = randomService.genre();
      var dateTime = randomService.date();
      var date = dateTime.toLocaleDateString();

      var book = {
        genre: genre,
        image: randomService.image(genre),
        title: randomService.title(),
        author: {
          name: randomService.name(),
          genre: genre
        },
        publish_date: date,
        recommended: service.isBookRecommended(dateTime)
      };

      books.push(book);
    }

    return deferred.promise;
  };

  service.isBookRecommended = function(dateTime){
    var isFriday = dateTime.getDay() === 6;
    var isHallowen = dateTime.getDate() && dateTime.getMonth() + 1 === 10;
    return isFriday || isHallowen;
  };

  service.searchByTags = function(tags, books){
    var deferred = $q.defer();

    var results = [];
    for(var i = 0, len=books.length + 1; i < len ;i++){
      var book = books[i];
      
      if(i === books.length){
        deferred.resolve(results);
        break;
      }

      if(tags.indexOf('recommended') !== -1 && book.recommended){
        results.push(book);
      } else if(tags.indexOf(book.genre) !== -1){
        results.push(book);
      }
    }

    return deferred.promise;
  };

  return service;
}

module.exports = dataService;
