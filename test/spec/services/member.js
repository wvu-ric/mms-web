'use strict';

describe('Service: member', function () {

  // load the service's module
  beforeEach(module('mmsApp'));

  // instantiate service
  var member;
  beforeEach(inject(function (_member_) {
    member = _member_;
  }));

  it('should do something', function () {
    expect(!!member).toBe(true);
  });

});
