(function () {
  'use strict';

  angular.module('app.music', ['ui.router'])

  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('music', {
        url: '/music',
        templateUrl: 'scripts/states/music/music.html',
        controller: 'musicCtrl as music',
        title: 'Music'
      });
  }]);
})();