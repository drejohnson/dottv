(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.service:GetRelatedVideos
   *
   * @description
   *
   */
  angular
    .module('app')
    .service('GetRelatedVideos', GetRelatedVideos);

  function GetRelatedVideos(Prismic, $q) {
    return {
      related: function (id) {
        var deferred = $q.defer();
        Prismic.ctx().then(function(ctx) {
          ctx.api.form('videos').query('[[:d = similar("'+ id +'", 10)]]').page().ref(ctx.ref).submit(function(err, data){
            deferred.resolve(data);
          });
        });
        return deferred.promise;
      }
    };
  }

})();
