'use strict';

angular.module('mms')
  .controller('CategoryCtrl', function ($scope, Story, Member, Category) {

    //TODO ID pulled from URL
    $scope.id = 'morgantown-brewing-co';

    Member.where({id:$scope.id}).then(function(member){
      $scope.member = member;
    });

    Story.where({id:$scope.member}).then(function(stories){
      $scope.stories = stories;
    });

    $scope.selectStory = function(index){
      $scope.stories[index].expanded = true;
    };

  });
