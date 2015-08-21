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
          }
        }
      });
  }

})();
