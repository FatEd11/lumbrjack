'use strict';

angular.module('lumbajackApp')
  .directive('portfolioFig', function () {
    return {
      templateUrl: 'app/portfolioFig/portfolioFig.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });