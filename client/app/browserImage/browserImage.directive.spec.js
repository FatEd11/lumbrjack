'use strict';

describe('Directive: browserImage', function () {

  // load the directive's module and view
  beforeEach(module('lumbrjackApp'));
  beforeEach(module('app/browserImage/browserImage.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<browser-image></browser-image>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the browserImage directive');
  }));
});