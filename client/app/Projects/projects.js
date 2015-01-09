'use strict';

angular.module('lumbajackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      })
      .state('projects.stl', {
      	url: '/simplify-the-law',
      	templateUrl: 'app/projects/project-views/stl.html'
      })
      .state('projects.stl.fjg', {
      	url: '/myfjg',
      	templateUrl: 'app/projects/project-views/fjg.html'
      })
      .state('projects.stl.rc', {
      	url: '/right-call',
      	templateUrl: 'app/projects/project-views/rc.html'
      })
      .state('projects.fsc', {
      	url: '/frith-street',
      	templateUrl: 'app/projects/project-views/fsc.html'
      });
  });