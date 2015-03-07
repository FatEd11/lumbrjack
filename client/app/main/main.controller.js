'use strict';

angular.module('lumbrjackApp')
  .controller('MainCtrl', function () {
    var ctrl = this;

    ctrl.currentPage = 0;
    ctrl.itemsPerPage = 3;
    ctrl.nextPage = nextPage;
    ctrl.nextPageDisabled = nextPageDisabled;

    ctrl.posts = [
      {title: 'Building a site pt. 1', link: 'http://blog.lumbrjack.com/building-a-portfolio-site/' , subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'How to navigate or wilderness 101', link: 'http://blog.lumbrjack.com/finding-a-direction/' , subtitle: 'Why does our business exist, other than to make money? The answer to that is our direction. And for every cliff we come up against, we can weigh up our options in light of it.'},
      {title: 'Building a site pt. 3', link: '#' , subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 4', link: '#' , subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 5', link: '#' , subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 6', link: '#' , subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
    ];

    ctrl.prevPage = prevPage;
    ctrl.prevPageDisabled = prevPageDisabled;
    ctrl.setPage = setPage;
    ctrl.tapHover = tapHover;

    function nextPage () {
      if (ctrl.currentPage < pageCount()){
        ctrl.currentPage++;
      }
    }

    function nextPageDisabled () {
      return ctrl.currentPage === pageCount() ? 'disabled' : '';
    }

    function pageCount () {
      return Math.ceil(ctrl.posts.length/ctrl.itemsPerPage)-1;
    }

    function prevPage () {
      if (ctrl.currentPage > 0){
        ctrl.currentPage--;
      }
    }

    function prevPageDisabled () {
      return ctrl.currentPage === 0 ? 'disabled' : '';
    }

    function setPage (n) {
      ctrl.currentPage = n;
    }

    function tapHover ($event){
      $event.element.toggleClass('skill-hover');
    }


  });
