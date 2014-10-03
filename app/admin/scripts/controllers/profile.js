'use strict';

/**
 * @ngdoc function
 * @name mmsadminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mmsadminApp
 */
angular.module('mms.admin')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
