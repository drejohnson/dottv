/* jshint esnext: true */
(() => {
  'use strict';

  class tabsMoreController {
    constructor($meteor, $log) {
      let vm = this;
      // $log.log('Tabs More Button Component Initialized');
    }
  }

  /**
   * @ngdoc object
   * @name tabs-more.controller:tabsMore
   *
   * @description
   *
   */
  angular
    .module('app')
    .controller('tabsMoreController', tabsMoreController);
}());
