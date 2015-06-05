/* jshint esnext: true */
(() => {
  'use strict';

  /**
   * @ngdoc directive
   * @name tabs-more.directive:tabs-more
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="polyEs6">
       <file name="index.html">
        <tabs-more></tabs-more>
       </file>
     </example>
   *
   */
  angular
    .module('app')
    .directive('tabsMore', tabsMore);

  function tabsMore() {
    return {
      restrict: 'EA',
      templateUrl: 'drejohnson_app-components_components/tabs-more/tabs-more.directive.ng.html',
      replace: true,
      controller: 'tabsMoreController',
      controllerAs: 'more',
      bindToController: true,
    };
  }
}());
