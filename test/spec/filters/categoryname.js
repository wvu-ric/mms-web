'use strict';

describe('Filter: categoryName', function () {

  // load the filter's module
  beforeEach(module('mmsApp'));

  // initialize a new instance of the filter before each test
  var categoryName;
  beforeEach(inject(function ($filter) {
    categoryName = $filter('categoryName');
  }));

  it('should return the input prefixed with "categoryName filter:"', function () {
    var text = 'angularjs';
    expect(categoryName(text)).toBe('categoryName filter: ' + text);
  });

});
