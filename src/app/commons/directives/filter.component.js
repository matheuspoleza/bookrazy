'use strict';

function filterComponent(){
  return {
    restrict: 'E',
    scope: {
      filters: '='
    },
    template: '<div class="ui multiple dropdown">'+
      '<input id="filtersInput" type="hidden" name="filters">'+
      '<i class="filter icon"></i>'+
      '<span class="text">Filter Tags</span>'+
      '<div class="menu">'+
        '<div class="ui icon search input">'+
          '<i class="search icon"></i>'+
          '<input type="text" placeholder="Search tag...">'+
        '</div>'+
        '<div class="divider"></div>'+
        '<div class="header">'+
          '<i class="tags icon"></i>'+
          'Genres'+
        '</div>'+
        '<div class="scrolling menu">'+
          '<div class="item"'+
            'ng-repeat="filter in filters"'+
            'data-value="{{ filter.name }}" id="{{ filter.name }}">'+
              '<div class="ui {{ filter.color }} empty circular label"></div>'+
              '{{ filter.name }}'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>',
    link: function(scope, element, attrs){
      scope.search = '';
      element.find('#filtersInput').change( onFilterChange );

      function onFilterChange(event){
        scope.search = event.target.value;
        scope.$emit('filterChange', scope.search);
      }

      $('.dropdown').dropdown();
    }
  };
}

module.exports = filterComponent;
