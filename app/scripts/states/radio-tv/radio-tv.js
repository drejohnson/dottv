(function () {
  'use strict';

  angular.module('app.radioTV', ['ui.router'])

  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('radio-tv', {
        url: '/radio-tv',
        templateUrl: 'scripts/states/radio-tv/radio-tv.html',
        controller: 'radioTVCtrl as radioTV',
        title: 'Radio-TV'
      });
  }]);
})();