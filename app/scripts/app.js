'use strict';

angular.module('mms', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'google-maps',
  'mms.components',
  'mms.models'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/member/:id', {
        templateUrl: 'views/member.html',
        controller: 'MemberCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
