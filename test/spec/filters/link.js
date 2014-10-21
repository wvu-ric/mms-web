'use strict';

describe('Filter: link', function () {

  // load the filter's module
  beforeEach(module('mmsApp'));

  // initialize a new instance of the filter before each test
  var link;
  beforeEach(inject(function ($filter) {
    link = $filter('link');
  }));

  it('should return the input prefixed with "link filter:"', function () {
    var text = 'angularjs';
    expect(link(text)).toBe('link filter: ' + text);
  });

});
