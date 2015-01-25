(function () {
  'use strict';

  /* @ngdoc object
   * @name channels
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('channels', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('channels', {
        url: '/channels',
        templateUrl: 'scripts/states/channels/channels.tpl.html',
        controller: 'ChannelsCtrl as channels'
      });
  }

})();
