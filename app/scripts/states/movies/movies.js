(function () {
  'use strict';

  angular.module('app.movies', ['ui.router'])

  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('movies', {
        url: '/movies',
        templateUrl: 'scripts/states/movies/movies.html',
        controller: 'moviesCtrl as movies',
        title: 'Movies'
      });
  }]);
})();