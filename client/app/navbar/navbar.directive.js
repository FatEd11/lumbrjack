'use strict';

angular.module('lumbajackApp')
  .directive('navbar', function ($location, $rootScope, $state, $window) {
    return {
      templateUrl: 'app/navbar/navbar.html',
      restrict: 'EA',
      link: function (scope, elem, attr) {

        // Inits

        var navButton = angular.element('.menu-icon');
        var navLink = angular.element('.nav-list');
        var navSub = angular.element('.sub-menu');
        var ngwindow = angular.element($window);
        var height = $window.innerHeight;
        var scrollPos = 0;

        ngwindow.bind('resize', function(){
          height = $window.innerHeight;
        });

        console.log(navSub);

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

        navButton.on('click', function(){
          navButton.toggleClass('open');
        });

        navLink.on('click', function(){
          scope.isCollapsed = true;
          navButton.removeClass('open');
        });

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