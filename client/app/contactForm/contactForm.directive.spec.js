'use strict';

describe('Directive: contactForm', function () {

  // load the directive's module and view
  beforeEach(module('lumbajrckApp'));
  beforeEach(module('app/contactForm/contactForm.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<contact-form></contact-form>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the contactForm directive');
  }));
});