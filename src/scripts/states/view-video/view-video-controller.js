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

  function ViewVideoCtrl($scope, $rootScope, GetVideoView, GetRelatedVideos, SublimeVideoLoad, $stateParams, $filter, $timeout, $log) {
    var vm = this;
    var id = $stateParams.id;

    vm.playerLoaded = false;

    activate();
    function activate() {
      GetVideoView.videoId(id).then(function(video){
        vm.video = video;
        vm.id = video.id;
        vm.slug = video.slug;
        vm.title = video.getText('video.title');
        vm.channel = video.getText('video.channel');
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

        var shareUrl = function (channel, id, slug) {
          return 'http://beta.tomorrowpictures.com/#/' + channel + '/' + id + '/' + slug
        };

        vm.shareHref = shareUrl(vm.channel, vm.id, vm.slug);

        var videoid = function () {
          var embedId = $filter('getEmbedId')(vm.videourl);
          return embedId;
        };
        vm.youtubeID = videoid();

        // $scope.$watch(function() { return vm.youtubeID; },
        //   function() {
        //
        //     vm.shareHref = shareUrl(vm.channel, vm.id, vm.slug);
        //     $log.log(vm.shareHref);
        //
        //     vm.playerLoaded = false;
        //
        //     var player = SublimeVideoLoad.load(function() {
        //       vm.playerLoaded = true;
        //
        //       sublimevideo.prepare('video');
        //       // sublimevideo.prepareAndPlay('video');
        //       _.defer(function(){$scope.$apply();});
        //
        //       $scope.$on('$destroy', function () {
        //         vm.shareHref = shareUrl(vm.channel, vm.id, vm.slug);
        //         // vm.playerLoaded = false;
        //         // sublimevideo.prepareAndPlay('video');
        //         sublimevideo.unprepare('video');
        //         // videoid();
        //         // player.dispose();
        //       });
        //     });
        //
        //   }
        // );

      }).then(function () {
        return $timeout(function () {
          var player = SublimeVideoLoad.load(function() {
            vm.playerLoaded = true;
            // sublimevideo.unprepare('video');
            sublimevideo.prepare('video');
            _.defer(function(){$scope.$apply();});

            $scope.$on('$destroy', function () {
              sublimevideo.unprepare('video');
              // player.dispose();
            });
          });
        }, 100);
      });

      // $log.log(GetVideoView.videoId(id));

      GetRelatedVideos.related(id).then(function(related){
        vm.related = related;
        vm.relatedResults = related.results;
        // console.log(vm.relatedResults);
      });
    }
  }

})();
