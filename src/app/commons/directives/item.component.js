'use strict';

function itemComponent(){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    template:
    '<div class="image">'+
      '<img src="{{ data.image }}">'+
    '</div>'+
    '<div class="content">'+
      '<div class="header">{{ data.title }}</div>'+
      '<div class="meta">'+
        '<a>{{ data.author.name }}</a>'+
      '</div>'+
      '<div class="description">'+
        '<div class="ui label"><i class="globe icon"></i> {{ data.genre }}</div>'+
        '<div ng-show="{{ data.recommended }}" class="ui green label" style="margin-top: 10px;">'+
          '<i class="thumbs up icon"></i>'+
          'recommended'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="extra content">'+
      '<div class="ui rating" data-max-rating="1"></div>'+
      '<span class="right floated">'+
        'Publish Date: {{ data.publish_date }}'+
      '</span>'+
    '</div>'
  };
}

module.exports = itemComponent;
