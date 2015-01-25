(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.service:GetAllVideos
   *
   * @description
   *
   */
  angular
    .module('app')
    .service('GetAllVideos', GetAllVideos);

  function GetAllVideos(Prismic, $q, $log) {
    return {
      getvideos: function (type) {
        var deferred = $q.defer();
        $log.debug('initializing videos');
        Prismic.ctx().then(function(ctx) {
          ctx.api.form(type).pageSize(21).page().ref(ctx.ref).submit(function(err, data){
            deferred.resolve(data);
          });
        });
        return deferred.promise;
      }
    };
  }

})();
