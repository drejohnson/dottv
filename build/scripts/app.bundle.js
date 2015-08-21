!function(){"use strict";function e(e){return angular.isFunction(e)?e():e}function t(e){return angular.isFunction(e)?e():e}function a(e,t,a,i,o){return t.html5Mode({enabled:!0,requireBase:!1}).hashPrefix("!"),a.useApplyAsync(!0),i.debugInfoEnabled(!1),o.digestTtl(8),e.otherwise("/")}function i(e){i.clientId="eeaefb8dd1da832af310585f56893869"}function o(e){e.setApiEndpoint("https://dottv.prismic.io/api"),e.setAccessToken(""),e.setClientId(""),e.setClientSecret(""),e.setLinkResolver(function(e,t){return"#/"+t.id+"/"+t.slug+e.maybeRefParam})}function n(e){var t=e.extendPalette("grey",{500:"212121",A100:"1a1a1a"}),a=e.extendPalette("red",{500:"c0392b"});e.definePalette("brandBlack",t),e.definePalette("brandRed",a),e.theme("default").primaryPalette("brandBlack").accentPalette("brandRed",{"default":"500"}).backgroundPalette("brandBlack",{"default":"A100"})}angular.module("app",["ui.router","ngAnimate","ngSanitize","ngMaterial","ngMdIcons","prismic.io","angular-velocity","com.2fdevs.videogular","com.2fdevs.videogular.plugins.controls","com.2fdevs.videogular.plugins.overlayplay","com.2fdevs.videogular.plugins.buffering","com.2fdevs.videogular.plugins.poster","info.vietnamcode.nampnq.videogular.plugins.youtube","angularMoment","angulartics","angulartics.google.analytics","djds4rce.angular-socialshare","plangular","templates","home","channels","viewVideo","lifestyle","music","docuSeries","comedy","radioTv","streams","search"]),angular.module("app").config(a).config(n).config(i).config(o).run(["$rootScope","$state","$timeout","Prismic","AppSettings","$log",function(a,i,o,n,r,s){a.$state=i,a.$on("$locationChangeSuccess",function(){s.debug("$locationChangeSuccess changed!",new Date)}),a.$on("$stateChangeSuccess",function(n,s){a.pageTitle="",a.pageDesc="",s.title&&(a.pageTitle+=s.title,a.pageTitle+=" — "),a.pageTitle+=r.appTitle;var l=e(i.$current.locals.globals.$title),c=t(i.$current.locals.globals.$description);o(function(){a.$title=l,a.$description=c})})}]),a.$inject=["$urlRouterProvider","$locationProvider","$httpProvider","$compileProvider","$rootScopeProvider"],i.$inject=["plangularConfigProvider"],o.$inject=["PrismicProvider"],n.$inject=["$mdThemingProvider"],angular.element(document).ready(function(){angular.bootstrap(document,["app"],{})})}(),function(){"use strict";angular.module("app").constant("AppSettings",{appTitle:"Tomorrow Pictures TV",appURL:"http://tomorrowpictures.tv",appDesc:"Channel Oriented Infotainment"})}(),function(){"use strict";function e(e){return function(e){var t=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,a=e.match(t);return a&&11==a[7].length?a[7]:void 0}}angular.module("app").filter("getEmbedId",e),e.$inject=["$sce"]}(),function(){"use strict";function e(e,t,a,i){return{getvideos:function(o){var n=a.defer();return i.debug("initializing search"),e.ctx().then(function(e){e.api.form(o).query('[[:d = fulltext(document, "'+t.q+'")]]').page().ref(e.ref).submit(function(e,t){n.resolve(t)})}),n.promise}}}angular.module("app").service("GetSearchResults",e),e.$inject=["Prismic","$stateParams","$q","$log"]}(),function(){"use strict";function e(e,t){return{related:function(a){var i=t.defer();return e.ctx().then(function(e){e.api.form("videos").query('[[:d = similar("'+a+'", 10)]]').page().ref(e.ref).submit(function(e,t){i.resolve(t)})}),i.promise}}}angular.module("app").service("GetRelatedVideos",e),e.$inject=["Prismic","$q"]}(),function(){"use strict";function e(e,t,a){return{getvideos:function(i){var o=t.defer();return a.debug("initializing videos"),e.ctx().then(function(e){e.api.form(i).pageSize(100).page().ref(e.ref).submit(function(e,t){o.resolve(t)})}),o.promise}}}angular.module("app").service("GetAllVideos",e),e.$inject=["Prismic","$q","$log"]}(),function(){"use strict";function e(e,t,a){return{getvideos:function(){var i=t.defer();return a.debug("initializing featured video"),e.ctx().then(function(e){e.api.form("featured").pageSize(1).page().ref(e.ref).submit(function(e,t){i.resolve(t)})}),i.promise}}}angular.module("app").service("GetFeaturedVideo",e),e.$inject=["Prismic","$q","$log"]}(),function(){"use strict";function e(e,t,a){return{getvideos:function(i,o){var n=t.defer();return a.debug("initializing channel: "+o),e.ctx().then(function(e){e.api.form(i).query('[[:d = at(document.tags, ["'+o+'"])]]').pageSize(100).page().ref(e.ref).submit(function(e,t){n.resolve(t)})}),n.promise}}}angular.module("app").service("GetChannelVideos",e),e.$inject=["Prismic","$q","$log"]}(),function(){"use strict";function e(e,t){var a={};return{videoId:function(i){if(a[i])return o.resolve(a[i]),o.promise;var o=t.defer();return e.document(i).then(function(e){o.resolve(e)}),o.promise}}}angular.module("app").service("GetVideoView",e),e.$inject=["Prismic","$q"]}(),!function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/channels/channels.tpl.html",'<paper-toolbar id="featured-header" class="channelBanner {{ ::channels.channel | lowercase }}"><h2><span>{{::channels.channel}}</span></h2></paper-toolbar><md-tabs class="tabs-header md-primary" md-dynamic-height="" md-border-bottom=""><md-tab label="Latest"><md-card class="tab-card" flex=""><md-card-content class="tab-content"><md-list layout="row" layout-sm="column" layout-fill="" layout-wrap=""><md-item ng-repeat="video in ::channels.results track by video.id | filter:search | orderBy:\'-index\'" class="velocity-transition-slideUpIn {{::video.getText(\'video.channel\') | lowercase}}" data-velocity-opts="{ stagger: 350 }" channel="{{::video.getText(\'video.channel\') | lowercase}}" layout-padding-sm="" flex="100" flex-gt-md="50" flex-gt-lg="33"><md-item-content class="item"><div class="channelHeader" layout="row"><h3 class="channelTitle">{{::video.getText(\'video.channel\')}}</h3></div><div class="poster" ng-style="{ \'background-image\': \'url(\' + video.getImageView(\'video.poster\', \'column\').url +\')\' }"></div><div class="md-tile-content meta"><h2 class="title"><a href="/{{::video.getText(\'video.channel\')}}/{{::video.id}}/{{::video.slug}}" layout="row"><span>{{::video.getText(\'video.title\')}}</span><ng-md-icon icon="play_circle_outline" size="48" style="fill:#fff;"></ng-md-icon></a></h2><p class="intro"><a href="/{{::video.getText(\'video.channel\')}}/{{::video.id}}/{{::video.slug}}" layout="row">{{::video.getText(\'video.shortlede\')}}</a></p></div></md-item-content><md-divider md-inset="" hide-sm="" ng-if="!$last"></md-divider><md-divider hide-gt-sm="" ng-if="!$last"></md-divider></md-item><md-divider></md-divider></md-list></md-card-content></md-card></md-tab></md-tabs>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/comedy/comedy.tpl.html","<h2>comedy</h2><p>{{comedy.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/docu-series/docu-series.tpl.html","<h2>docuSeries</h2><p>{{docuSeries.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/home/home.tpl.html",'<section class="home"><paper-toolbar id="featured-header" class="dark-background"><h2><span>Featured Video</span> <span></span></h2></paper-toolbar><section class="featured-video"><div class="videogular-container"><videogular vg-player-ready="home.onPlayerReady($API)" vg-auto-play="true"><vg-media vg-src="home.config.sources" vg-youtube="rel=0;showinfo=0;autoplay=1;mute=1"></vg-media><vg-controls vg-autohide="home.config.autoHide" vg-autohide-time="home.config.autoHideTime"><vg-play-pause-button></vg-play-pause-button><vg-time-display>{{ currentTime | date:\'mm:ss\' }}</vg-time-display><vg-scrub-bar><vg-scrub-bar-current-time></vg-scrub-bar-current-time></vg-scrub-bar><vg-time-display>{{ timeLeft | date:\'mm:ss\' }}</vg-time-display><vg-volume><vg-mute-button></vg-mute-button><vg-volume-bar></vg-volume-bar></vg-volume><vg-fullscreen-button></vg-fullscreen-button></vg-controls><vg-overlay-play></vg-overlay-play><vg-poster vg-url="home.config.plugins.poster"></vg-poster><div class="logo-layer" ng-show="home.API.currentState != \'play\'"><img src="/assets/images/logos/logo-red.svg"></div></videogular></div></section><md-tabs class="tabs-header md-primary" md-dynamic-height="" md-border-bottom=""><md-tab label="Latest"><md-card class="tab-card" flex=""><md-card-content class="tab-content"><h2 class="label" layout-padding-sm="">Latest Videos</h2><md-list layout="row" layout-sm="column" layout-fill="" layout-wrap=""><md-item ng-repeat="video in ::home.results track by video.id | filter:search | orderBy:\'-index\'" class="velocity-transition-slideUpIn {{::video.getText(\'video.channel\') | lowercase}}" data-velocity-opts="{ stagger: 350 }" channel="{{::video.getText(\'video.channel\') | lowercase}}" layout-padding-sm="" flex="100" flex-gt-md="50" flex-gt-lg="33"><md-item-content class="item"><div class="channelHeader" layout="row"><h3 class="channelTitle">{{::video.getText(\'video.channel\')}}</h3></div><div class="poster" ng-style="{ \'background-image\': \'url(\' + video.getImageView(\'video.poster\', \'column\').url +\')\' }"></div><div class="md-tile-content meta"><h2 class="title"><a href="/{{::video.getText(\'video.channel\')}}/{{::video.id}}/{{::video.slug}}" layout="row"><span>{{::video.getText(\'video.title\')}}</span><ng-md-icon icon="play_circle_outline" size="48" style="fill:#fff;"></ng-md-icon></a></h2><p class="intro"><a href="/{{::video.getText(\'video.channel\')}}/{{::video.id}}/{{::video.slug}}" layout="row">{{::video.getText(\'video.shortlede\')}}</a></p></div></md-item-content><md-divider md-inset="" hide-sm="" ng-if="!$last"></md-divider><md-divider hide-gt-sm="" ng-if="!$last"></md-divider></md-item><md-divider></md-divider></md-list></md-card-content></md-card></md-tab></md-tabs></section>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/lifestyle/lifestyle.tpl.html","<h2>movies</h2><p>{{movies.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/music/music.tpl.html","<h2>music</h2><p>{{music.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/radio-tv/radio-tv.tpl.html","<h2>radioTv</h2><p>{{radioTv.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/search/search-bar-directive.tpl.html",'<div>{{searchBar.name}}</div><form class="searchbox" ng-submit="submit()"><input type="search" placeholder="Search......" name="search" class="searchbox-input" onkeyup="buttonUp();" required=""><button type="submit" class="searchbox-submit">Click Me!</button></form>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/search/search-empty.tpl.html",'<header class="channelBanner" horizontal="" layout="" center=""><h2>Oops!!! Something\'s not right!</h2><p></p></header><section items="" horizontal="" layout="" wrap=""><div class="animate-repeat"><div content=""><p>Sorry but you don\'t search for anything! Try you search again</p></div></div></section>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/search/search.tpl.html",'<section class="search"><paper-toolbar id="page-header" class="videoTitle dark-background"><h2 ng-if="search.q.length < 1">Oops!!! Something\'s not right!</h2><h2 ng-if="search.q.length > 1">Here\'s {{search.searchResults.length}} videos that match the search results for "{{search.q}}"</h2></paper-toolbar><section ng-if="search.q.length < 1"><div class="animate-repeat"><div content=""><h2 self-center="">Sorry but you didn\'t search for anything! Try your search again!</h2></div></div></section><div class="items horizontal layout wrap" ng-if="search.q.length > 1"><div class="item" ng-repeat="video in search.searchResults | limitTo:21"><div class="search-thumb"><img ng-src="{{video.getImageView(\'video.poster\', \'icon\').url}}" alt=""></div><div class="caption" flex="" style="margin-left:10px;"><h2>{{video.getText(\'video.title\')}}</h2><p>{{video.getText(\'video.shortlede\')}}</p><a style="display:block;" href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}">View Video</a></div></div></div></section>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/streams/streams.tpl.html",'<section class="downloads"><h2 class="title">New Music <span>Downloads</span></h2><div class="items horizontal layout wrap"><div class="item"><h2>Counter Histories Mixtape</h2><div class="cover"><div class="coverImg" style="background-image:url( \'/assets/images/downloads/counter_histories_tracklist.jpg\' );"></div></div><div class="playlist"><iframe width="100%" height="359" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/121025973&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe></div></div><div class="item"><h2>Boxing Chick Mixtape</h2><div class="cover"><div class="coverImg" style="background-image:url( \'/assets/images/downloads/boxing_chicks_mixtape.jpg\' );"></div></div><div class="playlist"><iframe width="100%" height="359" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/121934559&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe></div></div></div></section>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/view-video/view-video.tpl.html",'<article class="videoFrame"><paper-toolbar id="page-header" class="videoTitle dark-background"><h1><span>{{::viewVideo.title}}</span></h1></paper-toolbar><section class="featured-video"><div class="videogular-container"><videogular vg-player-ready="viewVideo.onPlayerReady($API)"><vg-media vg-src="viewVideo.config.sources" vg-youtube="rel=0;showinfo=0"></vg-media><vg-controls vg-autohide="viewVideo.config.autoHide" vg-autohide-time="viewVideo.config.autoHideTime"><vg-play-pause-button></vg-play-pause-button><vg-time-display>{{ currentTime | date:\'mm:ss\' }}</vg-time-display><vg-scrub-bar><vg-scrub-bar-current-time></vg-scrub-bar-current-time></vg-scrub-bar><vg-time-display>{{ timeLeft | date:\'mm:ss\' }}</vg-time-display><vg-volume><vg-mute-button></vg-mute-button><vg-volume-bar></vg-volume-bar></vg-volume><vg-fullscreen-button></vg-fullscreen-button></vg-controls><vg-overlay-play></vg-overlay-play><vg-poster vg-url="viewVideo.config.plugins.poster"></vg-poster><div class="logo-layer" ng-show="viewVideo.API.currentState != \'play\'"><img src="/assets/images/logos/logo-red.svg"></div></videogular></div></section><div class="bottomPanel"><section class="bottomContent"><div class="title">{{::viewVideo.intro}}</div><div class="socialButtons"><awesome-button type="facebook" sharer="">Share it!</awesome-button><awesome-button type="twitter" sharer="">Share it!</awesome-button><awesome-button type="plus" sharer="">Share it!</awesome-button></div><div class="description" ng-bind-html="viewVideo.content"></div></section><section class="related"><h2 class="title">View Related <span>Videos</span></h2><div class="items horizontal layout wrap"><div class="item" ng-repeat="related in ::viewVideo.relatedResults"><div class="related-thumb"><img ng-src="{{::related.getImageView(\'video.poster\', \'icon\').url}}" alt=""></div><div class="caption" flex="" style="margin-left:10px;"><h2>{{::related.getText(\'video.title\')}}</h2><p>{{::related.getText(\'video.shortlede\')}}</p><a style="display:block;" href="/{{::related.getText(\'video.channel\')}}/{{::related.id}}/{{::related.slug}}">View Video</a></div></div></div></section></div></article>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/components/tabs-more/tabs-more.directive.ng.html",'<md-item layout="" class="more inset" layout-margin-sm=""><md-button layout="" layout-align="start center" flex="" class="md-primary"><ng-md-icon icon="arrow_forward"></ng-md-icon>More</md-button></md-item>')}])}(),function(){"use strict";function e(e){e.state("search",{"abstract":!0,url:"/search",template:"<ui-view/>"}),e.state("search.q",{url:"/:q",templateUrl:"scripts/states/search/search.tpl.html",controller:"SearchCtrl as search"})}angular.module("search",["ui.router"]),angular.module("search").config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e,t,a,i,o,n){var r=this,s="videos";r.searchq=i.q,r.q=i.q,a.getvideos(s).then(function(e){r.search=e,r.searchResults=e.results,r.totalPages=e.total_pages,r.totalPages>1&&(r.paginationRange=_.range(1,r.totalPages+1))})}angular.module("search").controller("SearchCtrl",e),e.$inject=["$rootScope","$scope","GetSearchResults","$stateParams","Prismic","$log"]}(),function(){"use strict";function e(e){e.state("viewVideo",{url:"/:tag/:id/:slug",templateUrl:"scripts/states/view-video/view-video.tpl.html",controller:"ViewVideoCtrl as viewVideo",resolve:{viewID:["$stateParams","GetVideoView",function(e,t){return t.videoId(e.id)}],$title:["viewID",function(e){var t=e.fragments["video.title"].value,a=_.pluck(t,"text");return _.first(a)}],$description:["viewID",function(e){var t=e.fragments["video.shortlede"].value,a=_.pluck(t,"text");return _.first(a)}]}})}angular.module("viewVideo",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e,t,a,i,o,n,r,s){function l(){a.videoId(u).then(function(e){c.video=e,c.id=e.id,c.slug=e.slug,c.title=e.getText("video.title"),c.channel=e.getText("video.channel"),c.intro=e.getText("video.shortlede"),c.content=e.getStructuredText("video.content").asHtml(),c.date=e.getDate("video.date"),c.link=e.getGroup("video.related"),c.youtube=e.getText("video.youtubeid"),c.embed=e.get("video.videoembed"),c.videourl=e.getText("video.videourl"),c.poster=e.getImageView("video.poster","main").url,c.tags=e.tags,c.imgSM=e.getImageView("video.poster","icon").url;var t=function(e,t,a){return"http://tomorrowpictures.tv/"+e+"/"+t+"/"+a};c.shareHref=t(c.channel,c.id,c.slug);var a=function(){var e=n("getEmbedId")(c.videourl);return e};c.youtubeID=a(),c.currentVideo=c.videourl,c.currentTime=0,c.totalTime=0,c.state=null,c.volume=1,c.isCompleted=!1,c.API=null,c.onPlayerReady=function(e){c.API=e},c.onCompleteVideo=function(){c.isCompleted=!0},c.onUpdateState=function(e){c.state=e},c.onUpdateTime=function(e,t){c.currentTime=e,c.totalTime=t},c.onUpdateVolume=function(e){c.volume=e},c.config={autoHide:!0,autoHideTime:3e3,autoPlay:!0,preload:"auto",sources:[{src:c.currentVideo}],plugins:{poster:c.poster}}}),i.related(u).then(function(e){c.related=e,c.relatedResults=e.results})}var c=this,u=o.id;c.playerLoaded=!1,l()}angular.module("viewVideo").controller("ViewVideoCtrl",e),e.$inject=["$scope","$rootScope","GetVideoView","GetRelatedVideos","$stateParams","$filter","$timeout","$log"]}(),function(){"use strict";function e(e){e.state("channels",{url:"/channels",templateUrl:"scripts/states/channels/channels.tpl.html",controller:"ChannelsCtrl as channels"})}angular.module("channels",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e,t,a,i,o,n){function r(){t.getvideos(l,c).then(function(e,t){t?a.path("/"):(s.videos=e,s.results=e.results,n.log(s.results),s.totalVideos=e.results.length,s.totalPages=e.total_pages,s.totalPages>1&&(s.paginationRange=_.range(1,s.totalPages+1)))})}var s=this,l="videos",c=i.current.title;s.channel=c,r()}angular.module("channels").controller("ChannelsCtrl",e),e.$inject=["$scope","GetChannelVideos","$location","$state","$stateParams","$log"]}(),function(){"use strict";function e(e){e.state("radioTvFilm",{url:"/radio-tv-film",templateUrl:"scripts/states/channels/channels.tpl.html",controller:"ChannelsCtrl as channels",title:"Radio-TV-Film",resolve:{$title:function(){return"Radio-TV-Film"},$description:function(){return"Channel Oriented Infotainment"}}})}angular.module("radioTv",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(){var e=this;e.ctrlName="RadioTvCtrl"}angular.module("radioTv").controller("RadioTvCtrl",e)}(),function(){"use strict";function e(e){e.state("comedy",{url:"/comedy",templateUrl:"scripts/states/channels/channels.tpl.html",controller:"ChannelsCtrl as channels",title:"Comedy",resolve:{$title:function(){return"Comedy"},$description:function(){return"Channel Oriented Infotainment"}}})}angular.module("comedy",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(){var e=this;e.ctrlName="ComedyCtrl"}angular.module("comedy").controller("ComedyCtrl",e)}(),function(){"use strict";function e(e){e.state("docuSeries",{url:"/docu-series",templateUrl:"scripts/states/channels/channels.tpl.html",controller:"ChannelsCtrl as channels",title:"Docu-Series",resolve:{$title:function(){return"Docu-Series"},$description:function(){return"Channel Oriented Infotainment"}}})}angular.module("docuSeries",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(){var e=this;e.ctrlName="DocuSeriesCtrl"}angular.module("docuSeries").controller("DocuSeriesCtrl",e)}(),function(){"use strict";function e(e){e.state("music",{url:"/music",templateUrl:"scripts/states/channels/channels.tpl.html",controller:"ChannelsCtrl as channels",title:"Music",resolve:{$title:function(){return"Music"},$description:function(){return"Channel Oriented Infotainment"}}})}angular.module("music",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(){var e=this;e.ctrlName="MusicCtrl"}angular.module("music").controller("MusicCtrl",e)}(),function(){"use strict";function e(e){e.state("streams",{url:"/streams",templateUrl:"scripts/states/streams/streams.tpl.html",controller:"StreamsCtrl as streams",title:"Music Streams"})}angular.module("streams",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(){var e=this;e.ctrlName="StreamsCtrl"}angular.module("streams").controller("StreamsCtrl",e)}(),function(){"use strict";function e(e){e.state("lifestyle",{url:"/lifestyle",templateUrl:"scripts/states/channels/channels.tpl.html",controller:"ChannelsCtrl as channels",title:"Lifestyle",resolve:{$title:function(){return"Lifestyle"},$description:function(){return"Channel Oriented Infotainment"}}})}angular.module("lifestyle",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(){var e=this;e.ctrlName="LifestyleCtrl"}angular.module("lifestyle").controller("LifestyleCtrl",e)}(),function(){"use strict";function e(e){e.state("home",{url:"/",templateUrl:"scripts/states/home/home.tpl.html",controller:"HomeCtrl as home",resolve:{$title:function(){return"Home"},$description:function(){return"Channel Oriented Infotainment"}}})}angular.module("home",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e,t,a,i,o,n,r,s){function l(){a.getvideos(u).then(function(e){c.videos=e,c.results=e.results,c.totalPages=e.total_pages,c.totalPages>1&&(c.paginationRange=_.range(1,c.totalPages+1))}),i.getvideos().then(function(e){c.featured=e,c.featuredResults=e.results,c.featuredTitle=c.featuredResults[0].getText("featured.title"),c.featuredUrl=c.featuredResults[0].getText("featured.videourl"),c.featuredPoster=c.featuredResults[0].getImageView("featured.poster","main").url;var t=function(){var e=o("getEmbedId")(c.featuredUrl);return e};c.youtubeID=t(),c.video=c.featuredUrl,c.currentTime=0,c.totalTime=0,c.state=null,c.volume=1,c.isCompleted=!1,c.API=null,c.onPlayerReady=function(e){c.API=e},c.onCompleteVideo=function(){c.isCompleted=!0},c.onUpdateState=function(e){c.state=e},c.onUpdateTime=function(e,t){c.currentTime=e,c.totalTime=t},c.onUpdateVolume=function(e){c.volume=e},c.config={autoHide:!0,autoHideTime:3e3,autoPlay:!0,preload:"auto",sources:[{src:c.video}],plugins:{poster:c.featuredPoster}}})}var c=this,u="videos";l()}angular.module("home").controller("HomeCtrl",e),e.$inject=["$scope","$sce","GetAllVideos","GetFeaturedVideo","$filter","$state","$timeout","$log"]}(),function(e){"use strict";var t=e.querySelector("#app");t.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){console.log("Elements imported!")}),t.onMenuSelect=function(){var t=e.querySelector("#paperDrawerPanel");t.narrow&&t.closeDrawer()}}(document);