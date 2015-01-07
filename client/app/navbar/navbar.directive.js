'use strict';

angular.module('lumbajackApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'app/navbar/navbar.html',
      restrict: 'EA',
      link: function (scope, elem, attr, $location) {
        var navButton = angular.element('.menu-icon');

      	scope.menu = [{
      		'title': 'Home',
      		'link': '/'
    	  }];
      	scope.isCollapsed = true;
      	scope.isActive = function(route) {
  	      return route === $location.path();
  	    };

        navButton.on('click', function(){
          navButton.toggleClass('open');
        });
      }
    };
  });