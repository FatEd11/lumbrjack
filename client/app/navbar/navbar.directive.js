'use strict';

angular.module('lumbajackApp')
  .directive('navbar', function ($location) {
    return {
      templateUrl: 'app/navbar/navbar.html',
      restrict: 'EA',
      link: function (scope, elem, attr) {
        var navButton = angular.element('.menu-icon');

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

        scope.isFilled = function () {
          if ($location.path() === '/') {
            return false;
          }
          return true;
        };

      }
    };
  });