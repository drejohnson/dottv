(function () {
  'use strict';

  angular.module('app.comedy', ['ui.router'])

  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('comedy', {
        url: '/comedy',
        templateUrl: 'scripts/states/comedy/comedy.html',
        controller: 'comedyCtrl as comedy',
        title: 'Comedy'
      });
  }]);
})();