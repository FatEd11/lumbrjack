'use strict';

angular.module('lumbrjackApp')
  .controller('MainCtrl', function () {
  	var ctrl = this;

    ctrl.tapHover = tapHover;
    ctrl.posts = [
      {title: 'Building a site pt. 1', subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 2', subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 3', subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 4', subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 5', subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 6', subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
    ];

    function tapHover ($event){
      $event.element.toggleClass('skill-hover');
    };


  });
