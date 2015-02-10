'use strict';

describe('Directive: scrollInClass', function () {

  // load the directive's module
  beforeEach(module('lumbrjackApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scroll-in-class></scroll-in-class>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scrollInClass directive');
  }));
});