'use strict';

/**
 * @ngdoc function
 * @name mmsadminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mmsadminApp
 */
angular.module('mms.admin')
  .controller('MembersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
