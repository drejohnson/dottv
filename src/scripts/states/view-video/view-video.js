(function () {
  'use strict';

  /* @ngdoc object
   * @name viewVideo
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('viewVideo', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('viewVideo', {
        url: '/:tag/:id/:slug',
        templateUrl: 'scripts/states/view-video/view-video.tpl.html',
        controller: 'ViewVideoCtrl as viewVideo',
        resolve: {
          // Single video
          viewID: function($stateParams, GetVideoView) {
            return GetVideoView.videoId($stateParams.id);
          },
          $title: function(viewID) {
            var getTitle = viewID.fragments['video.title']['value'];
            var text = _.pluck(getTitle, 'text');
            return _.first(text);
          },
          $description: function(viewID) {
            var getDesc = viewID.fragments['video.shortlede']['value'];
            var desc = _.pluck(getDesc, 'text');
            return _.first(desc);
          },
          $metaImg: function(viewID) {
            var getImg = viewID.fragments['video.poster']['value']['main']['url'];
            return getImg;
          },
          $url: function(viewID) {
            var base = 'http:/tomorrowpictures.tv/';
            var channel = viewID.fragments['video.channel']['value']
            var id = viewID.id;
            var slug = viewID.slug;
            var getUrl = base + channel + '/' + id + '/' + slug;
            return getUrl;
          }
        }
      });
  }

})();
