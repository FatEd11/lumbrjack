'use strict';

describe('Directive: mobileDevice', function () {

  // load the directive's module and view
  beforeEach(module('lumbajackApp'));
  beforeEach(module('app/mobileDevice/mobileDevice.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mobile-device></mobile-device>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the mobileDevice directive');
  }));
});