'use strict';

var commons = require('./../commons.module');
var randomService;

describe('Random Service Test', function(){
  beforeEach(angular.mock.module('app.commons'));

  beforeEach(angular.mock.inject(function($injector) {
    randomService = $injector.get('randomService');
  }));

  describe('On load', function(){
    it('should ...', function(){
      expect( randomService ).toBeDefined();
    });
  });

  describe('On change limit', function(){
    it('should ...', function(){
      expect( true ).toBeTruthy();
    });
  });

  describe('On search', function(){
    it('should ...', function(){
      expect( true ).toBeTruthy();
    });
  });
});
