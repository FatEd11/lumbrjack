'use strict';

describe('Directive: autoHide', function () {

  // load the directive's module
  beforeEach(module('lumbajackApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<auto-hide></auto-hide>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the autoHide directive');
  }));
});