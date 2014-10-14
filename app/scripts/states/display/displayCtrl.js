(function () {
  'use strict';

  angular.module('app.display')
    .controller('displayCtrl', displayCtrl)

  // displayCtrl.js
  function displayCtrl ($scope, $location, $stateParams, $filter, Prismic, SublimeVideo) {

    // ViewModel
    var vm = this;

    Prismic.document($stateParams.id).then(function(document){
      if (document.slug === $stateParams.slug) {
        Prismic.ctx().then(function(ctx) {
          $scope.videoHtml = document;
          $scope.title = document.getText('video.title');
          $scope.content = document.getStructuredText('video.content').asHtml(ctx);
          $scope.date = document.getDate('video.date');
          $scope.img = document.getImageView('video.poster', 'column');
          $scope.related = document.getGroup('video.related');
          $scope.embed = document.getStructuredText('video.youtubeid');
          $scope.testImg = document.getImage('video.poster');
          $scope.videoembed = document.fragments['video.videoembed'].value.oembed.html;
          $scope.videoProvider = document.fragments['video.videoembed'].value.oembed.provider_name;

          // $scope.playerLoaded = false;

          // SublimeVideo.load(function() {
          //   $scope.playerLoaded = true;
          //   $scope.$$phase || $scope.$apply();
          // });

        })
      }
      else if (document.slugs.indexOf($stateParams.slug) >= 0) {
        $location.path('/'+document.tag+'/'+document.id+'/'+document.slug);
      }
      else {
        // Should display some kind of error; will just redirect to / for now
        $location.path('/');
      }
    });
  }

})();