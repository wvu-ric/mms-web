'use strict';

angular.module('mms.models')
  .service('Category', function Category($q, $http, $log, API) {
    var CategoryService = function (params) {                    //Constructor
      if (params) {
        this.loadFromJson(params);
      }
    };

    CategoryService._current = null;                             //Private var

    CategoryService.prototype.loadFromJson = function (json) {   //Public method
      this.id = json.id;
      this.name = json.name;
      this.icon = json.icon;
      this.object = json.object;
    };

    CategoryService.current = function(){                        //Singleton
      var deferred = $q.defer();

      //Fetch from server once, doesn't change frequently
      if(!CategoryService._current){
        $http.get(API.categories).success(function(data){
          CategoryService._current = new CategoryService(data);
          deferred.resolve(CategoryService._current);
        }).error(function(){
          $log.warn('mms.models:Category+current | Failed to get the categories');
          deferred.reject();
        });
      }
      else{
        deferred.resolve(CategoryService._current);
      }

      return deferred.promise;
    };

    return CategoryService;
  });
