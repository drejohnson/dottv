(function () {
  'use strict';

  /* @ngdoc object
  * @name app
  * @requires $urlRouterProvider
  *
  * @description
  *
  */
  angular
  .module('app', [
    'ui.router',
    'ngAnimate',
    'ngSanitize',
    'ngMaterial',
    'ngMdIcons',
    'prismic.io',
    'angular-velocity',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'com.2fdevs.videogular.plugins.overlayplay',
    'com.2fdevs.videogular.plugins.buffering',
    'com.2fdevs.videogular.plugins.poster',
    'info.vietnamcode.nampnq.videogular.plugins.youtube',
    'angularMoment',
    'ngProgress',
    'angulartics',
    'angulartics.google.analytics',
    'infinite-scroll',
    'templates',
    'home',
    'channels',
    'viewVideo',
    'lifestyle',
    'movies',
    'music',
    'docuSeries',
    'comedy',
    'radioTv',
    'search'
  ]);

  angular
  .module('app')
  .run(function ($rootScope, Prismic, AppSettings, ngProgress, flashMessageService, $log) {
    $rootScope.msg = flashMessageService.msg;
    // log location change
    // Remove from production!
    $rootScope.$on('$locationChangeSuccess', function () {
      $log.debug('$locationChangeSuccess changed!', new Date());
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
      $rootScope.pageTitle = '';
      $rootScope.pageDesc = '';

      if (toState.title) {
        $rootScope.pageTitle += toState.title;
        $rootScope.pageTitle += ' \u2014 ';
      }

      $rootScope.pageTitle += AppSettings.appTitle;

      ngProgress.start();
      ngProgress.complete();
      ngProgress.color('#c0392b');
      ngProgress.height('4px');

    });
  })
  .config(urlConfig)
  .config(mdConfig)
  .config(prismicConfig);

  function urlConfig($urlRouterProvider, $locationProvider, $httpProvider, $compileProvider, $rootScopeProvider) {
    $locationProvider.html5Mode({
  		enabled: true,
  		requireBase: true
  	});
  	$httpProvider.useApplyAsync(true);
    $compileProvider.debugInfoEnabled(false);
    $rootScopeProvider.digestTtl(8);
  	return $urlRouterProvider.otherwise('/');
  }

  function prismicConfig(PrismicProvider) {
    PrismicProvider.setApiEndpoint('https://dottv.prismic.io/api');
    PrismicProvider.setAccessToken('');
    PrismicProvider.setClientId('');
    PrismicProvider.setClientSecret('');
    PrismicProvider.setLinkResolver(function(ctx, doc) {
      return '#/' + doc.id + '/' + doc.slug + ctx.maybeRefParam;
    });
  }

  function mdConfig($mdThemingProvider) {
    // $locationProvider.html5Mode(true);
    // Theme Config
    var brandBlack = $mdThemingProvider.extendPalette('grey', {
      '500': '212121',
      'A100': '1a1a1a'
    });
    var brandRed = $mdThemingProvider.extendPalette('red', {
      '500': 'c0392b'
    });
    $mdThemingProvider.definePalette('brandBlack', brandBlack);
    $mdThemingProvider.definePalette('brandRed', brandRed);
    $mdThemingProvider.theme('default')
      .primaryPalette('brandBlack')
      .accentPalette('brandRed', {
        'default': '500'
      })
      .backgroundPalette('brandBlack', {
        'default': 'A100'
      });
  }

})();
