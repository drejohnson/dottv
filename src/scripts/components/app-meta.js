(function () {
  'use strict';

  /**
    * @ngdoc service
    * @name app.meta
    *
    * @description
    *
  */
  angular
  .module('app')
  .run(GetMeta);

  function GetMeta($rootScope, $timeout, $state) {
    $rootScope.$on("$stateChangeSuccess", function() {
      var title = getTitleValue($state.$current.locals.globals.$title);
      var description = getDescriptionValue($state.$current.locals.globals.$description);
      $timeout(function() {
        $rootScope.$title = title;
        $rootScope.$description = description;
      });
    });

    function getTitleValue(title) {
      return angular.isFunction(title) ? title() : title;
    }
    function getDescriptionValue(description) {
      return angular.isFunction(description) ? description() : description;
    }
  }

})();
