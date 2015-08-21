(function () {
  'use strict';

  /* @ngdoc object
   * @name music
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('music', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('music', {
        url: '/music',
        templateUrl: 'scripts/states/channels/channels.tpl.html',
        controller: 'ChannelsCtrl as channels',
        title: 'Music',
        resolve: {
          // Constant Meta
          $title: function() { return 'Music'; },
          $description: function() { return 'Channel Oriented Infotainment'; }
        }
      });
  }

})();
