(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name search.service:GetSearchResults
   *
   * @description
   *
   */
  angular
    .module('app')
    .service('GetSearchResults', GetSearchResults);

  function GetSearchResults(Prismic, $stateParams, $q, $log) {
    return {
      getvideos: function (type) {
        var deferred = $q.defer();
        $log.debug('initializing search');
        Prismic.ctx().then(function(ctx) {
          ctx.api.form(type).query('[[:d = fulltext(document, "'+$stateParams.q+'")]]').page().ref(ctx.ref).submit(function(err, data){
            deferred.resolve(data);
          });
        });
        return deferred.promise;
      }
    };
  }

})();
