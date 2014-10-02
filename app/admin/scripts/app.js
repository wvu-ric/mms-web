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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
