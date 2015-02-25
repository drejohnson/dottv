(function () {
  'use strict';

  /* @ngdoc object
   * @name lifestyle
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('lifestyle', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('lifestyle', {
        url: '/lifestyle',
        templateUrl: 'scripts/states/channels/channels.tpl.html',
        controller: 'ChannelsCtrl as channels',
        title: 'Lifestyle'
      });
  }

})();
