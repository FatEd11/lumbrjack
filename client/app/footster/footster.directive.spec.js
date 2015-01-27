'use strict';

describe('Directive: footster', function () {

  // load the directive's module and view
  beforeEach(module('lumbrjackApp'));
  beforeEach(module('app/footster/footster.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<footster></footster>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the footster directive');
  }));
});