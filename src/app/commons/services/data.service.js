'use strict';

function dataService($q, randomService){
  var service = {};
  service.books = [];

  function loadBooksData(){
    for(var i=0, len=1000000; i<len; i++){
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

      service.books.push(book);
    }
  };

  service.isBookRecommended = function(dateTime){
    var isFriday = dateTime.getDay() === 6;
    var isHallowen = dateTime.getDate() && dateTime.getMonth() + 1 === 10;
    return isFriday || isHallowen;
  };

  service.searchByTags = function(tags){
    var deferred = $q.defer();

    var results = [];
    for(var i = 0, len=service.books.length + 1; i < len ;i++){
      var book = service.books[i];
      if(i === service.books.length){
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

  loadBooksData();
  return service;
}

module.exports = dataService;
