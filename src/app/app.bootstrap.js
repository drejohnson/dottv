//  ----------------Core Deps---------------  //
import angular from 'angular';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-material';
import 'angular-ui-router';
import 'angulartics';
import 'angulartics-google-analytics';
import 'videogular';
import 'videogular-buffering';
import 'videogular-controls';
import 'videogular-overlay-play';
import 'videogular-poster';
import 'videogular-analytics';
import 'videogular-youtube';
import 'angular-socialshare';
import 'angular-youtube-embed';
import 'rx-angular';
import 'adaptive-detection';

//  ----------------App Files---------------  //
import './core/core';
import './common/common';
import './components/components';
import './layout/app/app';

import appModule from './app.module';

/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */

angular.element(document).ready(()=> {
  angular.bootstrap(document, [ appModule.name ]), {
    strictDi: true
  };
});
