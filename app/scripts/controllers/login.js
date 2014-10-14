'use strict';

angular.module('mms')
  .controller('LoginCtrl', function ($scope, $log, Community, User, $window) {
    function init(){
      $scope.error = null;
      $scope.email = "";
      $scope.password = "";
    }
    init();

    $scope.login = function(email, password){
      var success = function(){
        $log.info('mms:LoginCtrl+login | Login successful');
        $window.location.href = '/admin';
      };

      var failure = function(){
        $log.warn('mms:LoginCtrl+login | Error logging in');
        $scope.error = {
          message:"Oops! Login failed."
        };
      };

      $scope.user = User.login(email, password).then(success, failure);
    };

  });
