'use strict';

function itemComponent(){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: 'app/commons/directives/item.template.html',
    link: function(scope, element, attrs){
      scope.addComent = function(item, event){
        if(event.target.value !== ''){
          item.comments.push(event.target.value);
          event.target.value = '';
        }
      };

      scope.like = function(item){
        if(item.likes === 0)
          item.likes = item.likes + 1;
      };
    }
  };
}

module.exports = itemComponent;
