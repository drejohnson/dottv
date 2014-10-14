(function () {
  'use strict';

  angular.module('app.docuSeries', ['ui.router'])

  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('docu-series', {
        url: '/docu-series',
        templateUrl: 'scripts/states/docu-series/docu-series.html',
        controller: 'docuSeriesCtrl as docuSeries',
        title: 'Docu-Series'
      });
  }]);
})();