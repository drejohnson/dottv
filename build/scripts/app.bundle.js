!function(){"use strict";function e(e){e.otherwise("/")}function t(e){e.setApiEndpoint("https://dottv.prismic.io/api"),e.setAccessToken(""),e.setClientId(""),e.setClientSecret(""),e.setLinkResolver(function(e,t){return"#/"+t.id+"/"+t.slug+e.maybeRefParam})}angular.module("app",["ui.router","ngAnimate","ngSanitize","prismic.io","angularMoment","ngProgress","ngMorph","templates","home","channels","viewVideo","movies","music","docuSeries","comedy","radioTv","search"]),angular.module("app").run(["$rootScope","Prismic","AppSettings","SublimeVideoLoad","ngProgress","$log",function(e,t,i,a,o,n){e.$on("$locationChangeSuccess",function(){n.debug("$locationChangeSuccess changed!",new Date)}),e.$on("$stateChangeSuccess",function(t,a){e.pageTitle="",e.pageDesc="",a.title&&(e.pageTitle+=a.title,e.pageTitle+=" — "),e.pageTitle+=i.appTitle,o.start(),o.complete(),o.color("#c0392b"),o.height("4px")})}]).config(e).config(t),e.$inject=["$urlRouterProvider","$locationProvider"],t.$inject=["PrismicProvider"]}(),function(){"use strict";angular.module("app").constant("AppSettings",{appTitle:"Tomorrow Pictures TV"})}(),function(){"use strict";function e(){return function(e){var t=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,i=e.match(t);return i&&11==i[7].length?i[7]:void 0}}angular.module("app").filter("getEmbedId",e),e.$inject=["$sce"]}(),function(){"use strict";function e(e,t,i,a){return{getvideos:function(o){var n=i.defer();return a.debug("initializing search"),e.ctx().then(function(e){e.api.form(o).query('[[:d = fulltext(document, "'+t.q+'")]]').page().ref(e.ref).submit(function(e,t){n.resolve(t)})}),n.promise}}}angular.module("app").service("GetSearchResults",e),e.$inject=["Prismic","$stateParams","$q","$log"]}(),function(){"use strict";function e(e,t){return{related:function(i){var a=t.defer();return e.ctx().then(function(e){e.api.form("videos").query('[[:d = similar("'+i+'", 10)]]').page().ref(e.ref).submit(function(e,t){a.resolve(t)})}),a.promise}}}angular.module("app").service("GetRelatedVideos",e),e.$inject=["Prismic","$q"]}(),function(){"use strict";function e(e,t,i){return{getvideos:function(a){var o=t.defer();return i.debug("initializing videos"),e.ctx().then(function(e){e.api.form(a).pageSize(21).page().ref(e.ref).submit(function(e,t){o.resolve(t)})}),o.promise}}}angular.module("app").service("GetAllVideos",e),e.$inject=["Prismic","$q","$log"]}(),function(){"use strict";function e(e,t,i){return{getvideos:function(a,o){var n=t.defer();return i.debug("initializing channel: "+o),e.ctx().then(function(e){e.api.form(a).query('[[:d = at(document.tags, ["'+o+'"])]]').page().ref(e.ref).submit(function(e,t){n.resolve(t)})}),n.promise}}}angular.module("app").service("GetChannelVideos",e),e.$inject=["Prismic","$q","$log"]}(),function(){"use strict";function e(e,t){var i={};return{videoId:function(a){if(i[a])return o.resolve(i[a]),o.promise;var o=t.defer();return e.document(a).then(function(e){o.resolve(e)}),o.promise}}}angular.module("app").service("GetVideoView",e),e.$inject=["Prismic","$q"]}(),function(){"use strict";function e(){return{load:function(e){sublimevideo.load(),sublimevideo.ready(function(){e&&e()})}}}angular.module("app").factory("SublimeVideoLoad",e)}(),!function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/channels/channels.tpl.html",'<header class="channelBanner {{ channels.channel | lowercase }}" horizontal="" layout="" center=""><h2>{{channels.channel}}</h2><p></p></header><div items="" horizontal="" layout="" wrap=""><div class="animate-repeat {{video.getText(\'video.channel\')}}" item="" ng-repeat="video in channels.results | limitTo:21" channel="{{video.getText(\'video.channel\')}}"><div content=""><div meta="" horizontal="" start-justified="" layout=""><div class="channelName" flex="" self-center="">{{video.getText(\'video.channel\')}}</div><div class="posted" self-center="">Posted: <span class="postedTime" am-time-ago="{{video.getDate(\'video.date\')}}" am-preprocess="utc"></span></div></div><div poster="" style="background-image:url(\'{{video.getImageView(\'video.poster\', \'column\').url}}\');background-size: cover; background-position: 50% 50%; background-repeat: no-repeat;"></div><div caption="" absolute=""><h2 title=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}" horizontal="" layout=""><span flex="" self-center="">{{video.getText(\'video.title\')}}</span><core-icon class="play-icon" icon="av:play-circle-outline" self-center=""></core-icon></a></h2><div intro=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}">{{video.getText(\'video.shortlede\')}}</a></div></div></div></div></div>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/comedy/comedy.tpl.html","<h2>comedy</h2><p>{{comedy.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/docu-series/docu-series.tpl.html","<h2>docuSeries</h2><p>{{docuSeries.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/home/home.tpl.html",'<section class="featured" vertical="" layout="" ng-cloak=""><header class="featuredBanner" horizontal="" start-justified="" layout=""><h2 self-center="">Featured Video: <span>{{home.featuredTitle}}</span></h2></header><div class="videoEmbed" horizontal="" start-justified="" layout=""><div class="flex-video animate-repeat" ng-repeat="featured in home.featuredResults"><video id="video" class="sublime" poster="{{home.featuredPoster}}" width="1600" height="900" title="Boxing Chick Eposide 1" data-sharing-url="http://beta.tomorrowpictures.com/#/{{featured.getText(\'video.channel\')}}/{{featured.id}}/{{featured.slug}}" data-sharing-title="{{home.featuredTitle}}" data-sharing-text="Watch and Share {{home.featuredTitle}}" data-sharing-twitter-text="Watch and Share {{home.featuredTitle}}" data-embed-type="auto" data-autoplay="true" data-uid="{{home.youtubeID}}" data-youtube-id="{{home.youtubeID}}" data-autoresize="fill" preload="none"></video></div></div></section><section items="" horizontal="" layout="" wrap=""><div class="animate-repeat {{video.getText(\'video.channel\')}}" item="" ng-repeat="video in home.results | limitTo:21" channel="{{video.getText(\'video.channel\')}}"><div content=""><div meta="" horizontal="" start-justified="" layout=""><div class="channelName" flex="" self-center="">{{video.getText(\'video.channel\')}}</div><div class="posted" self-center="">Posted: <span class="postedTime" am-time-ago="{{video.getDate(\'video.date\')}}" am-preprocess="utc"></span></div></div><div poster="" style="background-image:url(\'{{video.getImageView(\'video.poster\', \'column\').url}}\');background-size:cover;background-position: 50% 50%;background-repeat:no-repeat;"></div><div caption="" absolute=""><h2 title=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}" horizontal="" layout=""><span flex="" self-center="">{{video.getText(\'video.title\')}}</span><core-icon class="play-icon" icon="av:play-circle-outline" self-center=""></core-icon></a></h2><div intro=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}">{{video.getText(\'video.shortlede\')}}</a></div></div></div></div></section>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/movies/movies.tpl.html","<h2>movies</h2><p>{{movies.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/music/music.tpl.html","<h2>music</h2><p>{{music.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/radio-tv/radio-tv.tpl.html","<h2>radioTv</h2><p>{{radioTv.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/search/search-overlay.tpl.html",'<div class="search-overlay"><div class="search-results"><span class="glyphicon glyphicon-remove close">X</span><div><input type="text" name="q" ng-model="searchq"> <a class="search-btn close" href="#/search/{{searchq}}"><span class="close">Search</span></a></div><nav ng-include="\'scripts/states/search/search.tpl.html\'"></nav></div></div>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/search/search.tpl.html",'<header class="channelBanner" horizontal="" layout="" center=""><h2>Here\'s {{search.searchResults.length}} videos that match the search results for "{{search.q}}"</h2><p></p></header><section items="" horizontal="" layout="" wrap=""><div class="animate-repeat" item="" ng-repeat="video in search.searchResults | limitTo:21" channel="{{video.getText(\'video.channel\')}}"><div content=""><div meta="" horizontal="" start-justified="" layout=""><div class="channelName" self-center="">{{video.getText(\'video.channel\')}}</div></div><div poster="" style="background-image:url(\'{{video.getImageView(\'video.poster\', \'column\').url}}\');background-size:cover;background-position: 50% 50%;background-repeat:no-repeat;"></div><div caption="" absolute=""><h2 title=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}" horizontal="" layout=""><span flex="" self-center="">{{video.getText(\'video.title\')}}</span><core-icon class="play-icon" icon="av:play-circle-outline" self-center=""></core-icon></a></h2><div intro=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}">{{video.getText(\'video.shortlede\')}}</a></div></div></div></div></section>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/view-video/view-video.tpl.html",'<article class="videoFrame" layout="column"><header layout="row" layout-align="space-between center" class="videoTitle"><h1>{{viewVideo.title}}</h1></header><div class="videoEmbed"><div class="flex-video"><video id="video" class="sublime" poster="{{viewVideo.poster}}" width="640" height="360" title="{{viewVideo.title}}" data-sharing-url="http://beta.tomorrowpictures.com" data-sharing-title="{{viewVideo.title}}" data-sharing-text="Watch {{viewVideo.title}}" data-sharing-twitter-text="Watch {{viewVideo.title}}" data-embed-type="auto" data-uid="{{viewVideo.youtubeID}}" data-youtube-id="{{viewVideo.youtubeID}}" data-autoresize="fill" preload="none"></video></div></div><div class="bottomPanel"><section class="bottomContent"><div class="posted">This Video Was Posted:<time am-time-ago="viewVideo.date" am-preprocess="utc"></time></div><div class="title">{{viewVideo.intro}}</div><div class="description" ng-bind-html="viewVideo.content"></div></section><section class="related" flex=""><h2 class="title">View Related Videos</h2><div class="item" horizontal="" start-justified="" layout="" ng-repeat="related in viewVideo.relatedResults"><img class="related-thumb" src="{{related.getImageView(\'video.poster\', \'icon\').url}}" alt=""><div class="caption" flex="" style="margin-left:10px;"><h2>{{related.getText(\'video.title\')}}</h2><p>{{related.getText(\'video.shortlede\')}}</p><a style="display:block;" href="#/{{related.getText(\'video.channel\')}}/{{related.id}}/{{related.slug}}">View Video</a></div></div></section></div></article>')}])}(),function(){"use strict";function e(e){e.state("search",{url:"/search/:q",templateUrl:"scripts/states/search/search.tpl.html",controller:"SearchCtrl as search"})}angular.module("search",["ui.router"]),angular.module("search").config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e,t,i,a,o,n){var r=this,s="videos";r.searchq=a.q,r.q=a.q,n.log(r.searchq),i.getvideos(s).then(function(t){r.search=t,r.searchResults=t.results,r.totalPages=t.total_pages,r.totalPages>1&&(r.paginationRange=_.range(1,r.totalPages+1)),n.log(r.searchResults);e.searchMorph={closeEl:[".close",".search-btn"],overlay:{templateUrl:"scripts/states/search/search-overlay.tpl.html"}}})}angular.module("search").controller("SearchCtrl",e),e.$inject=["$rootScope","$scope","GetSearchResults","$stateParams","Prismic","$log"]}(),function(){"use strict";function e(e){e.state("viewVideo",{url:"/:tag/:id/:slug",templateUrl:"scripts/states/view-video/view-video.tpl.html",controller:"ViewVideoCtrl as viewVideo"})}angular.module("viewVideo",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e,t,i,a,o,n,r){function s(){i.videoId(c).then(function(t){l.video=t,l.title=t.getText("video.title"),l.channel=t.tags[0],l.intro=t.getText("video.shortlede"),l.content=t.getStructuredText("video.content").asHtml(),l.date=t.getDate("video.date"),l.link=t.getGroup("video.related"),l.youtube=t.getText("video.youtubeid"),l.embed=t.get("video.videoembed"),l.videourl=t.getText("video.videourl"),l.poster=t.getImageView("video.poster","main").url,l.tags=t.tags,l.imgSM=t.getImageView("video.poster","icon").url;var i=function(){var e=r("getEmbedId")(l.videourl);return e};l.youtubeID=i(),e.$watch(function(){return l.youtubeID},function(){l.playerLoaded=!1;o.load(function(){l.playerLoaded=!0,sublimevideo.prepare("video"),_.defer(function(){e.$apply()}),e.$on("$destroy",function(){sublimevideo.unprepare("video")})})})}),a.related(c).then(function(e){l.related=e,l.relatedResults=e.results})}var l=this,c=n.id;s()}angular.module("viewVideo").controller("ViewVideoCtrl",e),e.$inject=["$scope","$rootScope","GetVideoView","GetRelatedVideos","SublimeVideoLoad","$stateParams","$filter","$log"]}(),function(){"use strict";function e(e){e.state("channels",{url:"/channels",templateUrl:"scripts/states/channels/channels.tpl.html",controller:"ChannelsCtrl as channels"})}angular.module("channels",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e,t,i,a,o){function n(){t.getvideos(s,l).then(function(e,t){t?a.path("/"):(r.videos=e,r.results=e.results,r.totalVideos=e.results.length,r.totalPages=e.total_pages,r.totalPages>1&&(r.paginationRange=_.range(1,r.totalPages+1)))})}var r=this,s="videos",l=o.current.title;r.channel=l,n()}angular.module("channels").controller("ChannelsCtrl",e),e.$inject=["$scope","GetChannelVideos","SublimeVideoLoad","$location","$state","$stateParams","$log"]}(),function(){"use strict";function e(e){e.state("radioTv",{url:"/radio-tv",templateUrl:"scripts/states/channels/channels.tpl.html",controller:"ChannelsCtrl as channels",title:"Radio-TV"})}angular.module("radioTv",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(){var e=this;e.ctrlName="RadioTvCtrl"}angular.module("radioTv").controller("RadioTvCtrl",e)}(),function(){"use strict";function e(e){e.state("comedy",{url:"/comedy",templateUrl:"scripts/states/channels/channels.tpl.html",controller:"ChannelsCtrl as channels",title:"Comedy"})}angular.module("comedy",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(){var e=this;e.ctrlName="ComedyCtrl"}angular.module("comedy").controller("ComedyCtrl",e)}(),function(){"use strict";function e(e){e.state("docuSeries",{url:"/docu-series",templateUrl:"scripts/states/channels/channels.tpl.html",controller:"ChannelsCtrl as channels",title:"Docu-Series"})}angular.module("docuSeries",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(){var e=this;e.ctrlName="DocuSeriesCtrl"}angular.module("docuSeries").controller("DocuSeriesCtrl",e)}(),function(){"use strict";function e(e){e.state("music",{url:"/music",templateUrl:"scripts/states/channels/channels.tpl.html",controller:"ChannelsCtrl as channels",title:"Music"})}angular.module("music",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(){var e=this;e.ctrlName="MusicCtrl"}angular.module("music").controller("MusicCtrl",e)}(),function(){"use strict";function e(e){e.state("movies",{url:"/movies",templateUrl:"scripts/states/channels/channels.tpl.html",controller:"ChannelsCtrl as channels",title:"Movies"})}angular.module("movies",["ui.router"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(){var e=this;e.ctrlName="MoviesCtrl"}angular.module("movies").controller("MoviesCtrl",e)}(),function(){"use strict";function e(e){e.state("home",{url:"/",templateUrl:"scripts/states/home/home.tpl.html",controller:"HomeCtrl as home",title:"Home"})}angular.module("home",["ui.router","ngMorph"]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e,t,i,a,o,n,r,s){function l(){t.getvideos(u).then(function(e){c.videos=e,c.results=e.results,c.totalPages=e.total_pages,c.totalPages>1&&(c.paginationRange=_.range(1,c.totalPages+1)),c.playerLoaded=!1}).then(function(){return r(function(){a.load(function(){c.playerLoaded=!0,sublimevideo.prepare("video"),_.defer(function(){e.$apply()}),e.$on("$destroy",function(){sublimevideo.unprepare("video")})})},100)}),i.getvideos(u,d).then(function(e){c.featured=e,c.featuredResults=e.results,c.featuredTitle=c.featuredResults[0].getText("video.title"),c.featuredUrl=c.featuredResults[0].getText("video.videourl"),c.featuredPoster=c.featuredResults[0].getImageView("video.poster","main").url;var t=function(){var e=o("getEmbedId")(c.featuredUrl);return e};c.youtubeID=t(),s.log(c.featuredPoster)})}var c=this,u="videos",d="Featured";c.searchOverlay={closeEl:".close",overlay:{templateUrl:"scripts/states/search/search.tpl.html"}},c.playerLoaded=!1,l()}angular.module("home").controller("HomeCtrl",e),e.$inject=["$scope","GetAllVideos","GetChannelVideos","SublimeVideoLoad","$filter","$state","$timeout","$log"]}();