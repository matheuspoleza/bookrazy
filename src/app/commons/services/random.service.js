'use strict';

function randomService(){
  var service = {};
  var names = ['Eliot', 'John', 'Max', 'Joe', 'Mac', 'Max', 'James'];
  var lastNames = [];
  var genres = ['foods', 'animals', 'studies', 'travels', 'horror', 'finance'];

  service.date = function(){
    return faker.date.past();
  };

  service.image = function(genre){
    return 'assets/images/' + genre + '/photo' + service.number(7) + '.png';
  };

  service.number = function(max){
    return Math.floor((Math.random() * max) + 1);
  };

  service.name = function(){
    return faker.name.findName();
  };

  service.genre = function(){
    return getRandom(genres);
  };

  service.title = function(genre){
    return faker.lorem.words();
  };

  function getRandom(obj){
    return obj[Math.floor((Math.random() * obj.length - 1) + 1)];
  }

  return service;
}

module.exports = randomService;
