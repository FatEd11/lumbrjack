'use strict';

angular.module('lumbajackApp')
  .directive('navbar', function ($location, $window) {
    return {
      templateUrl: 'app/navbar/navbar.html',
      restrict: 'EA',
      link: function (scope, elem, attr) {
        var navButton = angular.element('.menu-icon');
        var ngwindow = angular.element($window);
        var height = $window.innerHeight;
        var scrollPos = 0;

        ngwindow.bind('resize', function(){
          height = $window.innerHeight;
        });

      	scope.menu = [
          {
        		'title': 'Home',
        		'link': '/'
      	  },
          {
            'title': 'Projects',
            'link': '/projects'
          }
        ];

      	scope.isCollapsed = true;

        navButton.on('click', function(){
          navButton.toggleClass('open');
        });

        scope.isFilled = false;

        if ($location.path() === '/') {
          ngwindow.bind('scroll', function(){
            scrollPos = this.pageYOffset;
            if (scrollPos > height){
              scope.isFilled = true;
              scope.$apply();
            } else {
              scope.isFilled = false;
              scope.$apply();
            }
          });
        } else {
          scope.isFilled = true;
        }
      }
    };
  });