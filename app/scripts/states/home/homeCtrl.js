(function () {
  'use strict';

  angular.module('app.home')
    .controller('homeCtrl', homeCtrl);

  // homeCtrl.js
  function homeCtrl ($scope, Prismic) {

    // ViewModel
    var vm = this;

    Prismic.api().then(function(api){
      return Prismic.ctx()
      .then(function(ctx){
        api.form('videos').pageSize(20).page().ref(ctx.ref).submit(function(err, documents) {
          if (err) {
          // Should display some kind of error; will just redirect to / for now
          $location.path('/');
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