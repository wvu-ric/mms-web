'use strict';

angular.module('mms', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'google-maps',
  'mms.components',
  'mms.models',
  'mms.mocks'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/category/:id', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/member/:id', {
        templateUrl: 'views/member.html',
        controller: 'MemberCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
