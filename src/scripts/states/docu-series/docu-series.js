(function () {
  'use strict';

  /* @ngdoc object
   * @name docuSeries
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('docuSeries', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('docuSeries', {
        url: '/docu-series',
        templateUrl: 'scripts/states/channels/channels.tpl.html',
        controller: 'ChannelsCtrl as channels',
        title: 'Docu-Series',
        resolve: {
          // Constant Meta
          $title: function() { return 'Docu-Series'; },
          $description: function() { return 'Channel Oriented Infotainment'; }
        }
      });
  }

})();
