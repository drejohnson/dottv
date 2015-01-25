(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name comedy.controller:ComedyCtrl
   *
   * @description
   *
   */
  angular
    .module('comedy')
    .controller('ComedyCtrl', ComedyCtrl);

  function ComedyCtrl() {
    var vm = this;
    vm.ctrlName = 'ComedyCtrl';
  }

})();
