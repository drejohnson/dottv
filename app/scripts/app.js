(function () {
  'use strict';
  // Declare app level module which depends on views, and components
  angular.module('app', [
    'ui.router',
    'app.sanitize',
    'app.services',
    'app.home',
    'app.movies',
    'app.music',
    'app.docuSeries',
    'app.comedy',
    'app.radioTV',
    'app.display',
    // 'app.search',
    'prismic.io',
    'ngSanitize',
    'angularMoment'
  ])
  .config(['$urlRouterProvider', function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }])
  .config(['PrismicProvider', function(PrismicProvider) {
    PrismicProvider.setApiEndpoint('https://dottv.prismic.io/api');
    PrismicProvider.setAccessToken('');
    PrismicProvider.setClientId('');
    PrismicProvider.setClientSecret('');
    PrismicProvider.setLinkResolver(function(ctx, doc) {
        return '#/' + doc.id + '/' + doc.slug + ctx.maybeRefParam;
    });
  }]);
})();