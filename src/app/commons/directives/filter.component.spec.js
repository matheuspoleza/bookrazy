'use strict';

var compile, scope, template, directiveElem;
var filters = [
  {
    name: 'studies',
    color: 'orange'
  },
  {
    name: 'animals',
    color: 'blue',
  },
  {
    name: 'horror',
    color: 'black'
  },
  {
    name: 'travels',
    color: 'purple'
  },
  {
    name: 'finance',
    color: 'yellow'
  },
  {
    name: 'foods',
    color: 'red'
  },
  {
    name: 'recommended',
    color: 'green'
  }
];

xdescribe('Filter Component Test', function(){

  beforeEach(angular.mock.module('app.commons'));

  function getCompiledElement(){
    var element = angular.element('<filter filters="filters"></filter>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  beforeEach(angular.mock.inject(function($injector) {
    compile = $injector.get('$compile');
    scope   = $injector.get('$rootScope').$new();
    scope.filters = filters;
    directiveElem = getCompiledElement();
  }));

  describe('On load', function(){
    it('should set empty search', function(){
      expect( directiveElem.isolateScope().search ).toEqual('');
    });
    it('should set items tags', function(){
      expect( directiveElem.find('.item').length ).toEqual(filters.length);
    });
  });
});
