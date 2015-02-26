'use strict';

angular.module('lumbrjackApp')
  .directive('scrollInClass', function ($window) {
    return {
      restrict: 'A',
      scope: {
        scrollInOffset : '@',
        scrollInRemove : '@'
      },
      link: function (scope, element, attrs) {

        if (Modernizr && Modernizr.touch) {return false;}

        var ngwindow = angular.element($window),
            el = element[0],
            scrollPos = (window.innerHeight || document.documentElement.clientHeight),
            elOffset = scope.scrollInOffset || 0,
            animEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            rect,
            onScrollHandler = function (){
              rect = el.getBoundingClientRect();
              if(rect.top <= scrollPos - elOffset){
                element.removeClass(attrs.scrollInRemove).addClass(attrs.scrollInClass);
              }
            };

        ngwindow.on('load', function(){
          ngwindow.on('scroll', onScrollHandler);
        });
      }
    };
  });
