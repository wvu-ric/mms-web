'use strict';

angular.module('mms.admin')
  .controller('CommunityCtrl', function ($scope, Community) {
    $scope.map = {
      center: {
        latitude: 0,
        longitude: 0
      },
      zoom: 8
    };

    $scope.options = {scrollwheel: false};

    $scope.marker = {
      id:0,
      coords: {
        latitude: 0,
        longitude: 0
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          console.log('Log end')
          $scope.community.location[0] = marker.getPosition().lat();
          $scope.community.location[1] = marker.getPosition().lng();
        }
      }
    };

    Community.current().then(function(community){
      $scope.community = community;

      $scope.map = {
        center: {
          latitude:  $scope.community.location[0],
          longitude: $scope.community.location[1]
        },
        zoom: 8
      };

      $scope.marker.coords = {
        latitude:  $scope.community.location[0],
        longitude: $scope.community.location[1]
      };

    });


  });
