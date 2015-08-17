(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name app.directive:searchBar
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="home">
       <file name="index.html">
        <search-bar></search-bar>
       </file>
     </example>
   *
   */
  angular
    .module('home')
    .directive('searchBar', searchBar);

  function searchBar() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'search/search-bar-directive.tpl.html',
      replace: false,
      controllerAs: 'search',
      controller: 'SearchCtrl',
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
