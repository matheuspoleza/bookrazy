'use strict';

var randomService;
require('./../commons.module');

describe('Random Service Test', function(){
  beforeEach(angular.mock.module('app.commons'));

  beforeEach(angular.mock.inject(function($injector) {
    randomService = $injector.get('randomService');
  }));

  describe('On load', function(){
    it('should service to be defined', function(){
      expect( randomService ).toBeDefined();
    });
  });
});
