(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.service:GetFeaturedVideo
   *
   * @description
   *
   */
  angular
    .module('app')
    .service('GetFeaturedVideo', GetFeaturedVideo);

  function GetFeaturedVideo(Prismic, $q, $log) {
    return {
      getvideos: function () {
        var deferred = $q.defer();
        $log.debug('initializing featured video');
        Prismic.ctx().then(function(ctx) {
          ctx.api.form('featured').pageSize(100).page().ref(ctx.ref).submit(function(err, data){
            deferred.resolve(data);
          });
        });
        return deferred.promise;
      }
    };
  }

})();
