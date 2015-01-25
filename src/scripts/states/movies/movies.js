(function () {
  'use strict';

  /* @ngdoc object
   * @name movies
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('movies', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('movies', {
        url: '/movies',
        templateUrl: 'scripts/states/channels/channels.tpl.html',
        controller: 'ChannelsCtrl as channels',
        title: 'Movies'
      });
  }

})();
