'use strict';

var commons = require('./../commons.module');
var service;

describe('Data Service Test', function(){
  beforeEach(angular.mock.module('app.commons'));

  beforeEach(angular.mock.inject(function($injector) {
    service = $injector.get('dataService');
  }));

  describe('On load books data', function(){
    var originalTimeout;

    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    it('should load data length', function(done){
      var results;

      service.loadBooksData(10).then(function(data){
        console.log('EXPECT');
        done();
        expect( false ).toEqual( true );
      });
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
  });
});
