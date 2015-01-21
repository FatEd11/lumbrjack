'use strict';

angular.module('lumbajackApp')
  .directive('navbar', function ($location, $rootScope, $state, $window) {
    return {
      templateUrl: 'app/navbar/navbar.html',
      restrict: 'EA',
      scope: true,
      link: function (scope, elem, attr) {

        // Inits

        var ngwindow = angular.element($window);
        var height = $window.innerHeight;
        var scrollPos = 0;

        ngwindow.bind('resize', function(){
          height = $window.innerHeight;
        });

      	scope.menu = [
          {
        		'title': 'Home',
        		'link': 'main',
            'submenu': [
              {
                'title': 'About',
                'link': 'about'
              },
              {
                'title': 'Projects',
                'link': 'portfolio'
              }
            ]
      	  },
          {
            'title': 'Projects',
            'link': 'projects'
          }
        ];

        // Submenu

        var hasSubmenu = function(item) {
          return item.hasOwnProperty('submenu');
        };

        scope.hasSubmenu = hasSubmenu;
        

        // Open and close menu

      	scope.isCollapsed = true;

        var openModal = function (){
          angular.element('body').toggleClass('modal-open');
        };

        var closeNav = function (){
          scope.isCollapsed = true;
          openModal();
        };

        scope.closeNav = closeNav;
        scope.openModal = openModal;

        // Fill menu

        scope.isFilled = false;

        $rootScope.$on('$stateChangeSuccess', 
          function(ev, to, toP, from, fromP){
            $state.current = to;
            var isMain = $state.is('main');
            if (isMain) {
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
          });
        }
    };
  });