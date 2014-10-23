'use strict';

angular.module('mms.models').factory('Story', function () {

  var Story = function (params) {
    if (params) {
      this.loadFromJson(params);
    }
  };

  Story.prototype.loadFromJson = function (json) {
    var that = this;
    angular.forEach(json, function(value, key){
      if(that){
        that[key] = value;
      }
      if(key == 'categoryIds'){ //Dedupe from server
        var uniqueIds = [];
        angular.forEach(value, function(category, index){
          if($.inArray(category, uniqueIds) === -1) uniqueIds.push(category);
        });
        that[key] = uniqueIds;
      }
    });
  };

  Story.prototype.type = function () {
    if (this.images && this.images.length > 0) {            //Image based stories
      return 'image';
    }
    else if (this.location && this.location.length === 2 && !(this.location[0]==0 && this.location[1]==0)) { //Location centric stories
      return 'location';
    }
    else {                                                  //Text only stories
      return 'text';
    }
  };

  return Story;
});
