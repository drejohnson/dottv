(function () {
  'use strict';

  /**
   * @ngdoc filter
   * @name app.filter:getEmbedId
   *
   * @description
   *
   * @param {Array} input The array to filter
   * @returns {Array} The filtered array
   *
   */
  angular
    .module('app')
    .filter('getEmbedId', getEmbedId);

  function getEmbedId($sce) {
    return function (url) {
      var youtubeRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var youtubeMatch = url.match(youtubeRegex);
      if (youtubeMatch && youtubeMatch[7].length == 11) {
        return youtubeMatch[7];
      } else {
        return undefined;
      }
    };
  }

  })();
