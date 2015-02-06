(function () {
  'use strict';

  /**
  * @ngdoc service
  * @name app.service:flashMessageService
  *
  * @description
  *
  */
  angular
  .module('app')
  .service('flashMessageService', flashMessageService);

  function flashMessageService($log) {
    this.msg = 'BETA! Best viewed in Chrome 35+, Safari 7+, Firefox 30+, IE 10+';
  }

})();
