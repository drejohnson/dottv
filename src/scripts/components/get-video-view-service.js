(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.service:GetVideoView
   *
   * @description
   *
   */
  angular
    .module('app')
    .service('GetVideoView', GetVideoView);

  function GetVideoView(Prismic, $q) {
    var cache = {};
    return {
      videoId: function (id) {
        if (cache[id]) {
          // Resolve the deferred $q object before returning the promise
          deferred.resolve(cache[id]);
          return deferred.promise;
        }
        var deferred = $q.defer();
        Prismic.document(id).then(function (video) {
          deferred.resolve(video);
        });
        return deferred.promise;
      }
    };
  }

})();
