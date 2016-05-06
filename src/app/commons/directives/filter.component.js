'use strict';

function filterComponent(){
  return {
    restrict: 'E',
    scope: {
      filters: '='
    },
    templateUrl: 'app/commons/directives/filter.template.html',
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
