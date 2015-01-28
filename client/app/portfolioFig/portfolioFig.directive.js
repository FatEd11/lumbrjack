'use strict';

angular.module('lumbrjackApp')
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

        var tapHover = function($event){
          $event.element.toggleClass('cs-hover');
        };

        //Public methods

        scope.figimage = '/assets/images/' + scope.image;
        scope.tapHover = tapHover;

      }
    };
  });