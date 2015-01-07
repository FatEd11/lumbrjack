'use strict';

angular.module('lumbajackApp')
  .directive('footster', function () {
    return {
      templateUrl: 'app/footster/footster.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });