(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.factory:SublimeVideoLoad
   *
   * @description
   *
   */
  angular
    .module('app')
    .factory('SublimeVideoLoad', SublimeVideoLoad);

  function SublimeVideoLoad() {
    return {
      load: function (callback) {
        sublimevideo.load();
        sublimevideo.ready(function() {
          if (callback) {
            callback();
          }
        });
      }
    };
  }

})();
