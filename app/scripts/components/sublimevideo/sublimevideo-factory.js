(function () {
  'use strict';

  angular.module('app.services', [])
    .factory('SublimeVideo', SublimeVideo);

    function SublimeVideo () {
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