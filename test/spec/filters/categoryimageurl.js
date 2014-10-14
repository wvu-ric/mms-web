'use strict';

describe('Filter: categoryImageUrl', function () {

  // load the filter's module
  beforeEach(module('mmsApp'));

  // initialize a new instance of the filter before each test
  var categoryImageUrl;
  beforeEach(inject(function ($filter) {
    categoryImageUrl = $filter('categoryImageUrl');
  }));

  it('should return the input prefixed with "categoryImageUrl filter:"', function () {
    var text = 'angularjs';
    expect(categoryImageUrl(text)).toBe('categoryImageUrl filter: ' + text);
  });

});
