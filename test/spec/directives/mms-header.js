'use strict';

describe('Directive: mmsHeader', function () {

  // load the directive's module
  beforeEach(module('mmsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mms-header></mms-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mmsHeader directive');
  }));
});
