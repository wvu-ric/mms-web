'use strict';

angular.module('mms')
  .controller('MemberCtrl', function ($scope, Story, Member) {

    //ID pulled from URL
    $scope.member = 'morgantown-brewing-co';

    Member.where({id:$scope.member}).then(function(member){
      $scope.member = member;
    });

    Story.where({id:$scope.member}).then(function(stories){
      $scope.stories = stories;
    });

    $scope.selectStory = function(index){
      $scope.stories[index].expanded = true;
    };

  });
