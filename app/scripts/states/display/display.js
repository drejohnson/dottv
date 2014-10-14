(function () {
  'use strict';

  angular.module('app.display', ['ui.router'])

  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('display', {
        url: '/:tag/:id/:slug',
        templateUrl: 'scripts/states/display/display.html',
        controller: 'displayCtrl as display'
      });
  }]);
})();