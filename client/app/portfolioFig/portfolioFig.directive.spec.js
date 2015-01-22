'use strict';

describe('Directive: portfolioFig', function () {

  // load the directive's module and view
  beforeEach(module('lumbajackApp'));
  beforeEach(module('app/portfolioFig/portfolioFig.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<portfolio-fig></portfolio-fig>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the portfolioFig directive');
  }));
});