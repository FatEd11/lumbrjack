'use strict';

angular.module('lumbajackApp')
  .directive('mobileDevice', function () {
    return {
      templateUrl: 'app/mobileDevice/mobileDevice.html',
      restrict: 'EA',
      scope: {
      	mobileImage: '@',
      	mobileAlt: '@'
      },
      link: function (scope) {
      	scope.image = '/assets/images/' + scope.mobileImage;
      	scope.alt = scope.mobileAlt;
      }
    };
  });