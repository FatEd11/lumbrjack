'use strict';

angular.module('lumbrjackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl as projects'
      })
      .state('stl', {
      	url: '/simplify-the-law',
      	templateUrl: 'app/projects/project-views/stl.html',
        controller: 'ProjectsCtrl as projects'
      })
      .state('stl.fjg', {
        onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal){
          $modal.open({
            size: 'lg',
            templateUrl: 'app/projects/project-views/fjg.html',
          }).result.finally(function () {
            $state.go('^');
          });
        }]
      })
      .state('stl.rc', {
        onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal){
          $modal.open({
            size: 'lg',
            templateUrl: 'app/projects/project-views/rc.html',
          }).result.finally(function () {
            $state.go('^');
          });
        }]
      })
      .state('fsc', {
      	url: '/frith-street',
      	templateUrl: 'app/projects/project-views/fsc.html'
      });
  });

