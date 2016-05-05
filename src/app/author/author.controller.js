'use strict';

function AuthorController($routeParams){
  var self = this;
  this.name = $routeParams.name;
}

module.exports = AuthorController;
