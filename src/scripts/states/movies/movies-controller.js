(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name movies.controller:MoviesCtrl
   *
   * @description
   *
   */
  angular
    .module('movies')
    .controller('MoviesCtrl', MoviesCtrl);

  function MoviesCtrl() {
    var vm = this;
    vm.ctrlName = 'MoviesCtrl';
  }

})();
