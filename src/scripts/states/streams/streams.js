(function () {
  'use strict';

  /* @ngdoc object
   * @name streams
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('streams', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('streams', {
        url: '/streams',
        templateUrl: 'scripts/states/streams/streams.tpl.html',
        controller: 'StreamsCtrl as streams',
        title: 'Music Streams'
      });
  }

})();
