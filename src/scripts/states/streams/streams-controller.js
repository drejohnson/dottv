(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name streams.controller:DownloadsCtrl
   *
   * @description
   *
   */
  angular
    .module('streams')
    .controller('StreamsCtrl', StreamsCtrl);

  function StreamsCtrl() {
    var vm = this;
    vm.ctrlName = 'StreamsCtrl';
  }

})();
