(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name channels.controller:ChannelsCtrl
   *
   * @description
   *
   */
  angular
    .module('channels')
    .controller('ChannelsCtrl', ChannelsCtrl);

  function ChannelsCtrl($scope, GetChannelVideos, $location, $state, $stateParams, $log) {
    var vm = this;
    var type = 'videos';
    var channel = $state.current.title;
    vm.channel =  channel;

    activate();
    function activate () {
      GetChannelVideos.getvideos(type, channel).then(function(videos, err){
        if (err) {
          // Should display some kind of error; will just redirect to / for now
          $location.path('/');
        } else {
          vm.videos = videos;
          vm.results = videos.results;
          // $log.log(vm.results);
          vm.totalVideos = videos.results.length;
          vm.totalPages = videos.total_pages;
          if (vm.totalPages > 1) vm.paginationRange = _.range(1, vm.totalPages+1);

          // vm.playerLoaded = false;
          //
          // var player = SublimeVideoLoad.load(function() {
          //   vm.playerLoaded = true;
          //   // sublimevideo.unprepare('video');
          //   sublimevideo.prepareAndPlay('video');
          //   _.defer(function(){$scope.$apply();});
          //
          //   $scope.$on('$destroy', function () {
          //     sublimevideo.unprepare('video');
          //   });
          // });
        }
      });
    }
  }

})();
