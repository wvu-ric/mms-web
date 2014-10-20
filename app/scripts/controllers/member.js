'use strict';

angular.module('mms')
  .controller('MemberCtrl', function ($scope, Story, Member, $routeParams) {

    function init(){
      $scope.id = $routeParams['id'];

      Member.where({id:$scope.id}).then(function(_member){
        $scope.member = _member;
      });

      Story.where({id:$scope.id}).then(function(stories){
        $scope.stories = stories;
      });



    }

  });
