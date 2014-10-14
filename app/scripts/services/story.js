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
    });
  };

  Story.prototype.type = function () {
    if (this.images && this.images.length > 0) {            //Image based stories
      return 'image';
    }
    else if (this.location && this.location.length === 2) { //Location centric stories
      return 'location';
    }
    else {                                                  //Text only stories
      return 'text';
    }
  };

  return Story;
});
