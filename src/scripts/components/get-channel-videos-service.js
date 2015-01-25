(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.service:GetChannelVideos
   *
   * @description
   *
   */
  angular
    .module('app')
    .service('GetChannelVideos', GetChannelVideos);

  function GetChannelVideos(Prismic, $q, $log) {
    return {
      getvideos: function (type, channel) {
        var deferred = $q.defer();
        $log.debug('initializing channel: ' + channel);
        Prismic.ctx().then(function(ctx) {
          ctx.api.form(type).query('[[:d = at(document.tags, ["'+ channel +'"])]]').page().ref(ctx.ref).submit(function(err, data){
            deferred.resolve(data);
          });
        });
        return deferred.promise;
      }
    };
  }

})();
