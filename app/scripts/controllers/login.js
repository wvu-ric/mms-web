'use strict';

angular.module('mms')
  .controller('LoginCtrl', function ($scope, $log, Member, Community) {
    function init(){
      $scope.member = new Member();
      $scope.error = null;
      $scope.email = "";
      $scope.password = "";
    }
    init();

    $scope.login = function(password){
      var success = function(){
        $log.info('mms:LoginCtrl+login | Login successful');
      };

      var failure = function(){
        $log.warn('mms:LoginCtrl+login | Error logging in');
        $scope.error = {
          message:"Oops! Login failed."
        };
      };

      $scope.member.email = $scope.email;
      $scope.member.login(password).then(success, failure);
    };

  });
