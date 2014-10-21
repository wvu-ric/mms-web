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
        $log.debug('mms.models:Category+current | Fetching categories...');
        $http.get(API.categories).success(function(data){
          var _categories = [];
          angular.forEach(data, function(_category, index){
            _categories.push(new CategoryService(_category));
          });
          CategoryService._current = _categories;
          deferred.resolve(CategoryService._current);
        }).error(function(){
          $log.warn('mms.models:Category+current | Failed to get the categories');
          deferred.reject();
        });
      }
      else{
        $log.debug('mms.models:Category+current | Returning cached categories');
        deferred.resolve(CategoryService._current);
      }

      return deferred.promise;
    };

    return CategoryService;
  });
