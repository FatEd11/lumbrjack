'use strict';

angular.module('lumbrjackApp')
  .directive('scrollInClass', function ($window) {
    return {
      restrict: 'A',
      scope: {
        scrollInOffset : '@'
      },
      link: function (scope, element, attrs) {
        
        var ngwindow = angular.element($window),
            el = element[0],
            scrollPos = (window.innerHeight || document.documentElement.clientHeight),
            elOffset = scope.scrollInOffset || 0,
            rect,
            onScrollHandler = function (){
              rect = el.getBoundingClientRect();
              if(rect.top <= scrollPos - elOffset){
                element.addClass(attrs.scrollInClass);
              }
            };
        
        ngwindow.on('scroll', onScrollHandler);
      }
    };
  });