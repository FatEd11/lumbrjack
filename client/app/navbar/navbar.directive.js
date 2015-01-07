'use strict';

angular.module('lumbajackApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'app/navbar/navbar.html',
      restrict: 'EA',
      link: function (scope, $location) {
      	scope.menu = [{
      		'title': 'Home',
      		'link': '/'
    	}];
    	scope.isCollapsed = true;
    	scope.isActive = function(route) {
	      return route === $location.path();
	    };
      }
    };
  });