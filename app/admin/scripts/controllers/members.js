'use strict';

angular.module('mms.admin')
  .controller('MembersCtrl', function ($scope, $location, $routeParams) {

    $scope.searchText = "";
    $scope.members = [{
        id:1,
        name:"Morgantown Brewing Co",
        email:"contact@morgantownbrewing.com",
        date:"Sept 27",
        firstPost:"Oktoberfest is today! Join us for beer, fun and games in our parking lot! 2nd annual homebrew competition starts at noon. Prost!"
      },
      {
        id:2,
        name:"Flying Fish",
        email:"flyingfishwv@gmail.com",
        date:"June 5",
        firstPost:"Welcome to our friends from Pathfinder of West Virginia tonight for the re release of the Pathfinder British Pale Ale! Cheers friends!"
      },
      {
        id:3,
        name:"Don Patron",
        email:"donpatron55@gmail.com",
        date:"June 7",
        firstPost:"Our ground beef is great! Try it today. We're doing all kinds of fun things with drinks. Yay drinks."
    }];

    $scope.select = function(index){
      $scope.deselectAll();
      $location.path('/members/'+$scope.members[index].id);
    };

    $scope.detailOpen = function(){
      var selected = false;
      angular.forEach($scope.members, function(value){
        if(value.selected){
          selected = true;
        }
      });
      return selected;
    };

    $scope.deselectAll = function(){
      angular.forEach($scope.members, function(value){
        value.selected = false;
      });
    };

    function checkRoute(){
      if($routeParams['id']){
        selectById($routeParams['id']);
      }
    }

    function selectById(id){
      $scope.deselectAll();
      angular.forEach($scope.members, function(value){
        if(value.id == id){
          value.selected = true;
          console.log('selected '+value.name);
        }
      });
    }

    checkRoute();

  });
