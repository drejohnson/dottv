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

  function ViewVideoCtrl($scope, $rootScope, GetVideoView, GetRelatedVideos, $stateParams, $filter, $timeout, $log) {
    var vm = this;
    var id = $stateParams.id;
    var videoid = '';

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
          return 'http://tomorrowpictures.tv/' + channel + '/' + id + '/' + slug
        };

        vm.shareHref = shareUrl(vm.channel, vm.id, vm.slug);

        var videoid = function () {
          var embedId = $filter('getEmbedId')(vm.videourl);
          return embedId;
        };
        vm.youtubeID = videoid();

        // Videogular
        vm.currentVideo = vm.videourl;
        vm.currentTime = 0;
        vm.totalTime = 0;
        vm.state = null;
        vm.volume = 1;
        vm.isCompleted = false;
        vm.API = null;
        vm.onPlayerReady = function(API) {
            vm.API = API;
        };
        vm.onCompleteVideo = function () {
          vm.isCompleted = true;
        };

        vm.onUpdateState = function (state) {
          vm.state = state;
        };

        vm.onUpdateTime = function (currentTime, totalTime) {
          vm.currentTime = currentTime;
          vm.totalTime = totalTime;
        };

        vm.onUpdateVolume = function (newVol) {
          vm.volume = newVol;
        };

        vm.config = {
          autoHide: true,
          autoHideTime: 3000,
          autoPlay: true,
          preload: 'auto',
          sources: [
            {src: vm.currentVideo },
          ],
          plugins: {
            poster: vm.poster
          }
        };

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
