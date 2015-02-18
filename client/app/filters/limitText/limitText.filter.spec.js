'use strict';

describe('Filter: limitText', function () {

  // load the filter's module
  beforeEach(module('lumbrjackApp'));

  // initialize a new instance of the filter before each test
  var limitText;
  beforeEach(inject(function ($filter) {
    limitText = $filter('limitText');
  }));

  it('should return the input prefixed with "limitText filter:"', function () {
    var text = 'angularjs';
    expect(limitText(text)).toBe('limitText filter: ' + text);
  });

});
