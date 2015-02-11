'use strict';

angular.module('lumbrjackApp')
  .controller('MainCtrl', function () {
  	var ctrl = this;
    this.tapHover = tapHover;

    function tapHover ($event){
      $event.element.toggleClass('skill-hover');
    };
  });
