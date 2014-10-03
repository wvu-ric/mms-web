'use strict';

/**
 * @ngdoc overview
 * @name mmsadminApp
 * @description
 * # mmsadminApp
 *
 * Main module of the application.
 */
angular
  .module('mms.admin', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/members', {
        templateUrl: 'views/members.html',
        controller: 'MembersCtrl'
      })

      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/members'
      });
  });
