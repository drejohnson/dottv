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
    'prismic.io',
    'angularMoment',
    'ngProgress',
    'angulartics',
    'angulartics.google.analytics',
    'templates',
    'home',
    'channels',
    'viewVideo',
    'movies',
    'music',
    'docuSeries',
    'comedy',
    'radioTv',
    'search'
  ]);

  angular
  .module('app')
  .run(function ($rootScope, Prismic, AppSettings, SublimeVideoLoad, ngProgress, $log) {
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

      // flash('This site is in Beta testing. Best viewed in Chrome 35+');

    });
  })
  .config(urlConfig)
  .config(prismicConfig);

  function urlConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
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

})();
