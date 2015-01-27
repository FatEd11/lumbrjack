'use strict';

describe('Service: sendMail', function () {

  // load the service's module
  beforeEach(module('lumbrjackApp'));

  // instantiate service
  var sendMail;
  beforeEach(inject(function (_sendMail_) {
    sendMail = _sendMail_;
  }));

  it('should do something', function () {
    expect(!!sendMail).toBe(true);
  });

});
