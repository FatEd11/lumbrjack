'use strict';

angular.module('lumbajackApp')
  .directive('browserImage', function () {
    return {
      templateUrl: 'app/browserImage/browserImage.html',
      restrict: 'EA',
      scope: {
      	browserImg: '@',
      	browserAlt: '@'
      },
      link: function (scope) {
      	scope.image = '/assets/images/' + scope.browserImg;
      	scope.alt = scope.browserAlt;
      }
    };
  });