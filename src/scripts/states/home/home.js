(function () {
  'use strict';

  /* @ngdoc object
   * @name home
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('home', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'scripts/states/home/home.tpl.html',
        controller: 'HomeCtrl as home',
        resolve: {
          // Constant Meta
          $title: function() { return 'Home'; },
          $description: function() { return 'Channel Oriented Infotainment'; }
        }
      });
  }

})();
