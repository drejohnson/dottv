(function () {
  'use strict';

  /* @ngdoc object
   * @name radioTv
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('radioTv', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('radioTvFilm', {
        url: '/radio-tv-film',
        templateUrl: 'scripts/states/channels/channels.tpl.html',
        controller: 'ChannelsCtrl as channels',
        title: 'Radio-TV-Film'
      });
  }

})();
