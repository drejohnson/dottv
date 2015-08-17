(function () {
  'use strict';

  /* @ngdoc object
   * @name search
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('search', [
      'ui.router'
    ]);

  angular
    .module('search')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('search', {
        abstract: true,
        url: '/search',
        template: '<ui-view/>'
      });
    $stateProvider
      .state('search.q', {
        url: '/:q',
        templateUrl: 'scripts/states/search/search.tpl.html',
        controller: 'SearchCtrl as search'
      });
  }

})();
