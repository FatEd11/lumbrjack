'use strict';

angular.module('lumbrjackApp')
  .controller('MainCtrl', function () {
  	var ctrl = this;

    ctrl.currentPage = 0;
    ctrl.itemsPerPage = 3;
    ctrl.nextPage = nextPage;
    ctrl.nextPageDisabled = nextPageDisabled;
    ctrl.pageCount = pageCount;

    ctrl.posts = [
      {title: 'Building a site pt. 1', link: '#' , subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 2', link: '#' , subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 3', link: '#' , subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 4', link: '#' , subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 5', link: '#' , subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
      {title: 'Building a site pt. 6', link: '#' , subtitle: 'For this lumbrjack\'s inaugural posts it seemed like a good idea to describe the processes and gotchas of building my portfolio site. This will be a catharsis for my brain, and a chance to practice my writing skills. And it may just provide a bit of guidance and instruction to someone in a similar position!'},
    ];

    ctrl.prevPage = prevPage;
    ctrl.prevPageDisabled = prevPageDisabled;
    ctrl.range = range;
    ctrl.setPage = setPage;
    ctrl.tapHover = tapHover;

    function nextPage () {
      if (ctrl.currentPage < ctrl.pageCount()){
        ctrl.currentPage++;
      }
    }

    function nextPageDisabled () {
      return ctrl.currentPage === ctrl.pageCount() ? 'disabled' : '';
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

    function range () {
      var rangeSize = 5, ret = [], start;
      start = ctrl.currentPage;

      if (start > ctrl.pageCount()-rangeSize) {
        start = ctrl.pageCount()-rangeSize+1;
      }

      for (var i=start; i<start+rangeSize; i++) {
        ret.push(i);
      }
      return ret;
    }

    function setPage (n) {
      ctrl.currentPage = n;
    }

    function tapHover ($event){
      $event.element.toggleClass('skill-hover');
    }


  });
