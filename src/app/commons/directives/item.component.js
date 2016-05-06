'use strict';

function itemComponent(){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: 'app/commons/directives/item.template.html'
  };
}

module.exports = itemComponent;
