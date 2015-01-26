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

  function HomeCtrl($scope, GetAllVideos, GetChannelVideos, SublimeVideoLoad, $filter, $state, $timeout, $log) {
    var vm = this;
    var type= 'videos';
    var channel =  'Featured';

    vm.playerLoaded = false;

    activate();
    function activate () {
      // Index of videos on Home Page
      GetAllVideos.getvideos(type).then(function(video){
        vm.videos = video;
        vm.results = video.results;
        vm.totalPages = video.total_pages;
        if (vm.totalPages > 1) vm.paginationRange = _.range(1, vm.totalPages+1);
        // $log.log(vm.paginationRange);

        vm.playerLoaded = false;

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
      // Use GetChannelVideos service to retrieve video with Featured tag
      // Should create a separate service???
      GetChannelVideos.getvideos(type, channel).then(function(featured){
        vm.featured= featured;
        vm.featuredResults = featured.results;
        vm.featuredTitle = vm.featuredResults[0].getText('video.title');
        vm.featuredUrl = vm.featuredResults[0].getText('video.videourl');
        vm.featuredPoster = vm.featuredResults[0].getImageView('video.poster', 'main').url;

        var videoid = function () {
          var embedId = $filter('getEmbedId')(vm.featuredUrl);
          return embedId;
        };
        vm.youtubeID = videoid();
        $log.log(vm.featuredPoster);

      });
    }
  }

})();
