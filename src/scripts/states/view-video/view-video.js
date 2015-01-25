(function () {
  'use strict';

  /* @ngdoc object
   * @name viewVideo
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('viewVideo', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('viewVideo', {
        url: '/:tag/:id/:slug',
        templateUrl: 'scripts/states/view-video/view-video.tpl.html',
        controller: 'ViewVideoCtrl as viewVideo'
      });
  }

})();
