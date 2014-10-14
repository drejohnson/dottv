(function () {
  'use strict';

  angular.module('app.sanitize', [])
    .filter('sanitize', sanitize);

    function sanitize ($sce) {
      return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
      }
    }

})();