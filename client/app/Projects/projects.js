'use strict';

angular.module('lumbrjackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl as '
      })
      .state('stl', {
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
      .state('fsc', {
      	url: '/frith-street',
      	templateUrl: 'app/projects/project-views/fsc.html'
      });
  });