'use strict';

angular.module('mms', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'google-maps',
  'mms.components',
  'mms.models',
  'mms.mocks',
  'gatekeeper'
])
  .config(function ($routeProvider, $httpProvider) {

    var interceptor = ['$rootScope', '$q', '$location', 'GateKeeper', function (scope, $q, $location, GateKeeper) {
      function success(response) {
        return response;
      }
      function error(response) {
        var status = response.status;
        if (status === 401) {
          GateKeeper.lock();
          $location.path('/login');
          return;
        }
        // otherwise
        return $q.reject(response);
      }
      return function (promise) {
        return promise.then(success, error);
      };
    }];

    $httpProvider.responseInterceptors.push(interceptor);

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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/join', {
        templateUrl: 'views/join.html',
        controller: 'JoinCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
