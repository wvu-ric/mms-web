'use strict';

angular.module('mms.models')
  .service('MapConfig', function MapConfig($log, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var MapConfig = {};
    var _marker = {
      id:'1',
      icon:'/images/location.png'
    };
    var _defaults = {
      center: {
        latitude: 39.630454,
        longitude: -79.957934
      },
      zoom: 17,
      options:{
        disableDefaultUI:true
      }
    };

    MapConfig.start = function(community){
      if(community){
        //TODO: Base starting location off of community location
        $log.debug('Updating map to community location');
        return _defaults;
      }
      else{
        //Use default location if no community or current location APIs
        $log.debug('Updating map to default location');
        return _defaults;
      }
    };


    MapConfig.setStory = function(story){
      var deferred = $q.defer();

      //TODO: Update map config to the story's location
      deferred.resolve(_defaults, _marker);

      return deferred.promise;
    };

    return MapConfig;

  });
