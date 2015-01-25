(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name viewVideo.controller:ViewVideoCtrl
   *
   * @description
   *
   */
  angular
    .module('viewVideo')
    .controller('ViewVideoCtrl', ViewVideoCtrl);

  function ViewVideoCtrl($scope, $rootScope, GetVideoView, GetRelatedVideos, SublimeVideoLoad, $stateParams, $filter, $log) {
    var vm = this;
    var id = $stateParams.id;

    activate();
    function activate() {
      GetVideoView.videoId(id).then(function(video){
        vm.video = video;
        vm.title = video.getText('video.title');
        vm.channel = video.tags[0];
        vm.intro = video.getText('video.shortlede');
        vm.content = video.getStructuredText('video.content').asHtml();
        vm.date = video.getDate('video.date');
        vm.link = video.getGroup('video.related');
        vm.youtube = video.getText('video.youtubeid');
        vm.embed = video.get('video.videoembed');
        vm.videourl = video.getText('video.videourl');
        vm.poster = video.getImageView('video.poster', 'main').url;
        vm.tags = video.tags;
        vm.imgSM = video.getImageView('video.poster', 'icon').url;
        // var tags = _(vm.tags).forEach(function(tags) {
        //   return tags;
        // }).join(', ');
        // vm.taglist = tags;

        var videoid = function () {
          var embedId = $filter('getEmbedId')(vm.videourl);
          return embedId;
        };
        vm.youtubeID = videoid();

        $scope.$watch(function() { return vm.youtubeID; },
          function() {

            vm.playerLoaded = false;

            var player = SublimeVideoLoad.load(function() {
              vm.playerLoaded = true;

              sublimevideo.prepare('video');
              // sublimevideo.prepareAndPlay('video');
              _.defer(function(){$scope.$apply();});

              $scope.$on('$destroy', function () {
                // vm.playerLoaded = false;
                // sublimevideo.prepareAndPlay('video');
                sublimevideo.unprepare('video');
                // videoid();
                // player.dispose();
              });
            });

          }
        );

      });

      GetRelatedVideos.related(id).then(function(related){
        vm.related = related;
        vm.relatedResults = related.results;
        // console.log(vm.relatedResults);
      });
    }
  }

})();
