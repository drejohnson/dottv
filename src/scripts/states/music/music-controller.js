(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name music.controller:MusicCtrl
   *
   * @description
   *
   */
  angular
    .module('music')
    .controller('MusicCtrl', MusicCtrl);

  function MusicCtrl() {
    var vm = this;
    vm.ctrlName = 'MusicCtrl';
  }

})();
