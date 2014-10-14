(function () {
  'use strict';

  angular.module('app.radioTV')
    .controller('radioTVCtrl', radioTVCtrl);

  // radio-tvCtrl.js
  function radioTVCtrl ($scope, $stateParams, Prismic) {

    // ViewModel
    var vm = this;
    var channel = 'Radio-TV';
    var page = parseInt($stateParams.page) || "1";
    Prismic.api().then(function(api){
      return Prismic.ctx()
      .then(function(ctx){
        api.form('videos').query('[[:d = at(document.tags, ["'+ channel +'"])]]').pageSize().page(page).ref(ctx.ref).submit(function(err, documents) {
          if (err) {
          // Should display some kind of error; will just redirect to / for now
          $location.path('/radio-tv');
          }
          else {
            $scope.documents = documents;
            // Angular doesn't repeat over collections created on the fly, so we have to create it here
            if (documents.total_pages > 1) $scope.paginationRange = _.range(1, documents.total_pages+1);
          }
        });
      });
    });
  
  }
})();