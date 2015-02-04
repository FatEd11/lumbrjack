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
        templateUrl: 'app/projects/project-views/fjg.html'
      })
      .state('stl.rc', {
        templateUrl: 'app/projects/project-views/rc.html'
      })
      .state('fsc', {
      	url: '/frith-street',
      	templateUrl: 'app/projects/project-views/fsc.html'
      });
  });

