(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name search.controller:SearchCtrl
   *
   * @description
   *
   */
  angular
    .module('search')
    .controller('SearchCtrl', SearchCtrl);

  function SearchCtrl($rootScope, $scope, GetSearchResults, $stateParams, Prismic, $log) {
    var vm = this;
    var type= 'videos';
    vm.searchq = $stateParams.q;
    vm.q = $stateParams.q;
    $log.log(vm.searchq);

    GetSearchResults.getvideos(type).then(function(search){
      vm.search = search;
      vm.searchResults = search.results;
      vm.totalPages = search.total_pages;
      if (vm.totalPages > 1) vm.paginationRange = _.range(1, vm.totalPages+1);
      $log.log(vm.searchResults);

      var searchMorph = $rootScope.searchMorph = {
        closeEl: ['.close', '.search-btn'],
        overlay: {
          templateUrl: 'scripts/states/search/search-overlay.tpl.html'
        }
      };
      // $log.log($rootScope.searchMorph);
    });
  }

})();
