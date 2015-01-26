'use strict';

angular.module('lumbajackApp')
  .directive('portfolioFig', function () {
    return {
      templateUrl: 'app/portfolioFig/portfolioFig.html',
      restrict: 'EA',
      scope: {
        image: '@',
        alt: '@',
        title:'@',
        subtitle:'@',
        link:'@'
      },
      link: function (scope, element, attrs) {
        scope.figimage = '/assets/images/' + scope.image;

        var figure = angular.element('.cs-style-3').find('figure');

        figure.on('touchend', function(){
          figure.toggleClass('cs-hover');
        });
      }
    };
  });