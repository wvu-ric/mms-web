'use strict';

describe('Service: community', function () {

  // load the service's module
  beforeEach(module('mmsApp'));

  // instantiate service
  var community;
  beforeEach(inject(function (_community_) {
    community = _community_;
  }));

  it('should do something', function () {
    expect(!!community).toBe(true);
  });

});
