!function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/channels/channels.tpl.html",'<paper-toolbar id="featured-header" class="channelBanner {{ ::channels.channel | lowercase }}"><h2><span>{{channels.channel}}</span></h2></paper-toolbar><md-tabs class="tabs-header md-primary" md-dynamic-height="" md-border-bottom=""><md-tab label="Latest"><md-card class="tab-card" flex=""><md-card-content class="tab-content"><md-list layout="row" layout-sm="column" layout-fill="" layout-wrap=""><md-item ng-repeat="video in channels.results | filter:search | orderBy:\'-index\'" class="{{::video.getText(\'video.channel\') | lowercase}}" channel="{{::video.getText(\'video.channel\') | lowercase}}" layout-padding-sm="" flex="100" flex-gt-md="50" flex-gt-lg="33"><md-item-content class="item"><div class="channelHeader" layout="row"><h3 class="channelTitle">{{::video.getText(\'video.channel\')}}</h3></div><div class="poster" ng-style="{ \'background-image\': \'url(\' + video.getImageView(\'video.poster\', \'column\').url +\')\' }"></div><div class="md-tile-content meta"><h2 class="title"><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}" layout="row"><span>{{::video.getText(\'video.title\')}}</span><ng-md-icon icon="play_circle_outline" size="36" style="fill:#fff;"></ng-md-icon></a></h2><p class="intro">{{::video.getText(\'video.shortlede\')}}</p></div></md-item-content><md-divider md-inset="" hide-sm="" ng-if="!$last"></md-divider><md-divider hide-gt-sm="" ng-if="!$last"></md-divider></md-item><md-divider></md-divider></md-list></md-card-content></md-card></md-tab></md-tabs>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/comedy/comedy.tpl.html","<h2>comedy</h2><p>{{comedy.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/docu-series/docu-series.tpl.html","<h2>docuSeries</h2><p>{{docuSeries.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/home/home.tpl.html",'<section class="home"><paper-toolbar id="featured-header" class="dark-background"><h2><span>Featured Video</span> <span></span></h2></paper-toolbar><section class="featured-video"><div class="videogular-container"><videogular vg-player-ready="home.onPlayerReady($API)" vg-auto-play="true" vg-autoplay="home.config.autoPlay"><vg-media vg-src="home.config.sources" vg-youtube="rel=0;showinfo=0"></vg-media><vg-controls vg-autohide="home.config.autoHide" vg-autohide-time="home.config.autoHideTime"><vg-play-pause-button></vg-play-pause-button><vg-time-display>{{ currentTime | date:\'mm:ss\' }}</vg-time-display><vg-scrub-bar><vg-scrub-bar-current-time></vg-scrub-bar-current-time></vg-scrub-bar><vg-time-display>{{ timeLeft | date:\'mm:ss\' }}</vg-time-display><vg-volume><vg-mute-button></vg-mute-button><vg-volume-bar></vg-volume-bar></vg-volume><vg-fullscreen-button></vg-fullscreen-button></vg-controls><vg-overlay-play></vg-overlay-play><vg-poster vg-url="home.config.plugins.poster"></vg-poster><div class="logo-layer" ng-show="home.API.currentState != \'play\'"><img src="assets/images/logos/logo-red.svg"></div></videogular></div></section><md-tabs class="tabs-header md-primary" md-dynamic-height="" md-border-bottom=""><md-tab label="Latest"><md-card class="tab-card" flex=""><md-card-content class="tab-content"><h2 class="label" layout-padding-sm="">Latest Videos</h2><md-list layout="row" layout-sm="column" layout-fill="" layout-wrap=""><md-item ng-repeat="video in home.results | filter:search | orderBy:\'-index\'" class="{{::video.getText(\'video.channel\') | lowercase}}" channel="{{::video.getText(\'video.channel\') | lowercase}}" layout-padding-sm="" flex="100" flex-gt-md="50" flex-gt-lg="33"><md-item-content class="item"><div class="channelHeader" layout="row"><h3 class="channelTitle">{{::video.getText(\'video.channel\')}}</h3></div><div class="poster" ng-style="{ \'background-image\': \'url(\' + video.getImageView(\'video.poster\', \'column\').url +\')\' }"></div><div class="md-tile-content meta"><h2 class="title"><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}" layout="row"><span>{{::video.getText(\'video.title\')}}</span><ng-md-icon icon="play_circle_outline" size="36" style="fill:#fff;"></ng-md-icon></a></h2><p class="intro">{{::video.getText(\'video.shortlede\')}}</p></div></md-item-content><md-divider md-inset="" hide-sm="" ng-if="!$last"></md-divider><md-divider hide-gt-sm="" ng-if="!$last"></md-divider></md-item><md-divider></md-divider></md-list></md-card-content></md-card></md-tab></md-tabs></section>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/lifestyle/lifestyle.tpl.html","<h2>movies</h2><p>{{movies.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/movies/movies.tpl.html","<h2>movies</h2><p>{{movies.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/music/music.tpl.html","<h2>music</h2><p>{{music.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/radio-tv/radio-tv.tpl.html","<h2>radioTv</h2><p>{{radioTv.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/search/search-bar-directive.tpl.html",'<div>{{searchBar.name}}</div><form class="searchbox" ng-submit="submit()"><input type="search" placeholder="Search......" name="search" class="searchbox-input" onkeyup="buttonUp();" required=""><button type="submit" class="searchbox-submit">Click Me!</button></form>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/search/search-empty.tpl.html",'<header class="channelBanner" horizontal="" layout="" center=""><h2>Oops!!! Something\'s not right!</h2><p></p></header><section items="" horizontal="" layout="" wrap=""><div class="animate-repeat"><div content=""><p>Sorry but you don\'t search for anything! Try you search again</p></div></div></section>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/search/search.tpl.html",'<header class="channelBanner" horizontal="" layout="" center=""><h2 ng-if="search.q.length < 1">Oops!!! Something\'s not right!</h2><h2 ng-if="search.q.length > 1">Here\'s {{search.searchResults.length}} videos that match the search results for "{{search.q}}"</h2><p></p></header><section ng-if="search.q.length < 1" items="" horizontal="" center-justified="" layout=""><div class="animate-repeat"><div content=""><h2 self-center="">Sorry but you didn\'t search for anything! Try your search again!</h2></div></div></section><section ng-if="search.q.length > 1" items="" horizontal="" layout="" wrap=""><div class="animate-repeat" item="" ng-repeat="video in search.searchResults | limitTo:21" channel="{{video.getText(\'video.channel\')}}"><div content=""><div meta="" horizontal="" start-justified="" layout=""><div class="channelName" self-center="">{{video.getText(\'video.channel\')}}</div></div><div poster="" style="background-image:url(\'{{video.getImageView(\'video.poster\', \'column\').url}}\');background-size:cover;background-position: 50% 50%;background-repeat:no-repeat;"></div><div caption="" absolute=""><h2 title=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}" horizontal="" layout=""><span flex="" self-center="">{{video.getText(\'video.title\')}}</span><core-icon class="play-icon" icon="av:play-circle-outline" self-center=""></core-icon></a></h2><div intro=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}">{{video.getText(\'video.shortlede\')}}</a></div></div></div></div></section>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/view-video/view-video.tpl.html",'<article class="videoFrame" layout="column"><paper-toolbar id="featured-header" class="videoTitle dark-background"><h1><span>{{::viewVideo.title}}</span></h1></paper-toolbar><section class="featured-video"><div class="videogular-container"><videogular vg-player-ready="viewVideo.onPlayerReady($API)"><vg-media vg-src="viewVideo.config.sources" vg-youtube="rel=0;showinfo=0"></vg-media><vg-controls vg-autohide="viewVideo.config.autoHide" vg-autohide-time="viewVideo.config.autoHideTime"><vg-play-pause-button></vg-play-pause-button><vg-time-display>{{ currentTime | date:\'mm:ss\' }}</vg-time-display><vg-scrub-bar><vg-scrub-bar-current-time></vg-scrub-bar-current-time></vg-scrub-bar><vg-time-display>{{ timeLeft | date:\'mm:ss\' }}</vg-time-display><vg-volume><vg-mute-button></vg-mute-button><vg-volume-bar></vg-volume-bar></vg-volume><vg-fullscreen-button></vg-fullscreen-button></vg-controls><vg-overlay-play></vg-overlay-play><vg-poster vg-url="viewVideo.config.plugins.poster"></vg-poster><div class="logo-layer" ng-show="viewVideo.API.currentState != \'play\'"><img src="assets/images/logos/logo-red.svg"></div></videogular></div></section><div class="bottomPanel"><section class="bottomContent"><div class="posted">This Video Was Posted: <span><time am-time-ago="viewVideo.date" am-preprocess="utc"></time></span></div><div class="title">{{viewVideo.intro}}</div><div class="description" ng-bind-html="viewVideo.content"></div></section><section class="related"><h2 class="title">View Related <span>Videos</span></h2><div class="items horizontal layout wrap"><div class="item" ng-repeat="related in viewVideo.relatedResults"><div class="related-thumb"><img src="{{related.getImageView(\'video.poster\', \'icon\').url}}" alt=""></div><div class="caption" flex="" style="margin-left:10px;"><h2>{{related.getText(\'video.title\')}}</h2><p>{{related.getText(\'video.shortlede\')}}</p><a style="display:block;" href="#/{{related.getText(\'video.channel\')}}/{{related.id}}/{{related.slug}}">View Video</a></div></div></div></section></div></article>')}])}();