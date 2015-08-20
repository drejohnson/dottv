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
    'angulartics',
    'angulartics.google.analytics',
    'djds4rce.angular-socialshare',
    'plangular',
    'templates',
    'home',
    'channels',
    'viewVideo',
    'lifestyle',
    'music',
    'docuSeries',
    'comedy',
    'radioTv',
    'streams',
    'search'
  ]);

  angular
  .module('app')
  .config(urlConfig)
  .config(mdConfig)
  .config(plangularConfig)
  .config(prismicConfig)
  .run(function ($rootScope, $state, Prismic, AppSettings, $FB, $log) {
    $FB.init('470100963137983');
    $rootScope.$state = $state;
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

    });
  });

  // UI-Router, Performance Config
  function urlConfig($urlRouterProvider, $locationProvider, $httpProvider, $compileProvider, $rootScopeProvider) {
    $locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
  	}).hashPrefix('!');
  	$httpProvider.useApplyAsync(true);
    $compileProvider.debugInfoEnabled(false);
    $rootScopeProvider.digestTtl(8);
  	return $urlRouterProvider.otherwise('/');
  }

  // Soundcloud Player Config
  function plangularConfig(plangularConfigProvider) {
    plangularConfig.clientId = 'eeaefb8dd1da832af310585f56893869';
  }

  // Prismic API Config
  function prismicConfig(PrismicProvider) {
    PrismicProvider.setApiEndpoint('https://dottv.prismic.io/api');
    PrismicProvider.setAccessToken('');
    PrismicProvider.setClientId('');
    PrismicProvider.setClientSecret('');
    PrismicProvider.setLinkResolver(function(ctx, doc) {
      return '#/' + doc.id + '/' + doc.slug + ctx.maybeRefParam;
    });
  }

  // Material Angular Theme Config
  function mdConfig($mdThemingProvider) {
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

  // Bootstrapping Angular
  angular.element(document).ready(function() {
    angular.bootstrap(document, [ 'app' ], {
      // strictDi: true
    });
  });

})();
