(function () {
  'use strict';

  angular.module('app.getVideoId-filter', [])
    .filter('getVideoId', getVideoId);
      function getVideoId(provider, url) {
        if (provider === 'YouTube') {
          var youtubeRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
          var youtubeMatch = url.match(youtubeRegex);
          if (youtubeMatch && youtubeMatch[7].length == 11) {
            return youtubeMatch[7];
          } else {
            return undefined;
          }
        } else if (provider === 'Vimeo') {
          var vimeoRegex = /^.*vimeo.com\/(\d+)/;
          var vimeoMatch = url.match(vimeoRegex);
          if (vimeoMatch && vimeoMatch[1].length == 8) {
            return vimeoMatch[1];
          } else {
            return undefined;
          }
        } 
      }
})();