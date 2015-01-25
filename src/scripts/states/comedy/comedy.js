(function () {
  'use strict';

  /* @ngdoc object
   * @name comedy
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('comedy', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('comedy', {
        url: '/comedy',
        templateUrl: 'scripts/states/channels/channels.tpl.html',
        controller: 'ChannelsCtrl as channels',
        title: 'Comedy'
      });
  }

})();
