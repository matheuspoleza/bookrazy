'use strict';

var service;

describe('Data Service Test', function(){
  beforeEach(angular.mock.module('app.commons'));

  beforeEach(angular.mock.inject(function($injector) {
    service = $injector.get('dataService');
  }));

  describe('On load books data', function(){
    it('should dataService to be defined', function(){
      expect( service ).toBeDefined();
    });
  });
});
