'use strict';

describe('Controller: MemberCtrl', function () {

  // load the controller's module
  beforeEach(module('mmsApp'));

  var MemberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MemberCtrl = $controller('MemberCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
