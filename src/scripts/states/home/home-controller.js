(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope, $sce, GetAllVideos, GetFeaturedVideo, $filter, $state, $timeout, $log) {
    var vm = this;
    var type= 'videos';
    var channel =  'Featured';

    activate();
    function activate () {
      // Index of videos on Home Page
      GetAllVideos.getvideos(type).then(function(video){
        vm.videos = video;
        vm.results = video.results;
        vm.totalPages = video.total_pages;
        if (vm.totalPages > 1) vm.paginationRange = _.range(1, vm.totalPages+1);
        // $log.log(vm.videos);
      });
      GetFeaturedVideo.getvideos().then(function(featured){
        vm.featured = featured;
        vm.featuredResults = featured.results;
        vm.featuredTitle = vm.featuredResults[0].getText('featured.title');
        vm.featuredUrl = vm.featuredResults[0].getText('featured.videourl');
        vm.featuredPoster = vm.featuredResults[0].getImageView('featured.poster', 'main').url;

        var videoid = function () {
          var embedId = $filter('getEmbedId')(vm.featuredUrl);
          return embedId;
        };
        vm.youtubeID = videoid();

        // Videogular
        vm.video = vm.featuredUrl;
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
            {src: vm.video },
          ],
          // sources: vm.videos[0].sources,
          plugins: {
            poster: vm.featuredPoster
          }
        };
      });
    }
  }

})();
