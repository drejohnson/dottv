!function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/channels/channels.tpl.html",'<header class="channelBanner {{ channels.channel | lowercase }}" horizontal="" layout="" center=""><h2>{{channels.channel}}</h2><p></p></header><div items="" horizontal="" layout="" wrap=""><div class="animate-repeat {{video.getText(\'video.channel\')}}" item="" ng-repeat="video in channels.results | limitTo:21" channel="{{video.getText(\'video.channel\')}}"><div content=""><div meta="" horizontal="" start-justified="" layout=""><div class="channelName" flex="" self-center="">{{video.getText(\'video.channel\')}}</div><div class="posted" self-center="">Posted: <span class="postedTime" am-time-ago="{{video.getDate(\'video.date\')}}" am-preprocess="utc"></span></div></div><div poster="" style="background-image:url(\'{{video.getImageView(\'video.poster\', \'column\').url}}\');background-size: cover; background-position: 50% 50%; background-repeat: no-repeat;"></div><div caption="" absolute=""><h2 title=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}" horizontal="" layout=""><span flex="" self-center="">{{video.getText(\'video.title\')}}</span><core-icon class="play-icon" icon="av:play-circle-outline" self-center=""></core-icon></a></h2><div intro=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}">{{video.getText(\'video.shortlede\')}}</a></div></div></div></div></div>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/comedy/comedy.tpl.html","<h2>comedy</h2><p>{{comedy.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/docu-series/docu-series.tpl.html","<h2>docuSeries</h2><p>{{docuSeries.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/home/home.tpl.html",'<section class="featured" vertical="" layout="" ng-cloak=""><header class="featuredBanner" horizontal="" start-justified="" layout=""><h2 self-center="">Featured Video: <span>{{home.featuredTitle}}</span></h2></header><div class="videoEmbed" horizontal="" start-justified="" layout=""><div class="flex-video animate-repeat" ng-repeat="featured in home.featuredResults"><video id="video" class="sublime" poster="{{home.featuredPoster}}" width="1600" height="900" title="Boxing Chick Eposide 1" data-sharing-url="http://beta.tomorrowpictures.com/#/{{featured.getText(\'video.channel\')}}/{{featured.id}}/{{featured.slug}}" data-sharing-title="{{home.featuredTitle}}" data-sharing-text="Watch and Share {{home.featuredTitle}}" data-sharing-twitter-text="Watch and Share {{home.featuredTitle}}" data-embed-type="auto" data-autoplay="true" data-uid="{{home.youtubeID}}" data-youtube-id="{{home.youtubeID}}" data-autoresize="fill" preload="none"></video></div></div></section><section items="" horizontal="" layout="" wrap=""><div class="animate-repeat {{video.getText(\'video.channel\')}}" item="" ng-repeat="video in home.results | limitTo:21" channel="{{video.getText(\'video.channel\')}}"><div content=""><div meta="" horizontal="" start-justified="" layout=""><div class="channelName" flex="" self-center="">{{video.getText(\'video.channel\')}}</div><div class="posted" self-center="">Posted: <span class="postedTime" am-time-ago="{{video.getDate(\'video.date\')}}" am-preprocess="utc"></span></div></div><div poster="" style="background-image:url(\'{{video.getImageView(\'video.poster\', \'column\').url}}\');background-size:cover;background-position: 50% 50%;background-repeat:no-repeat;"></div><div caption="" absolute=""><h2 title=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}" horizontal="" layout=""><span flex="" self-center="">{{video.getText(\'video.title\')}}</span><core-icon class="play-icon" icon="av:play-circle-outline" self-center=""></core-icon></a></h2><div intro=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}">{{video.getText(\'video.shortlede\')}}</a></div></div></div></div></section>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/movies/movies.tpl.html","<h2>movies</h2><p>{{movies.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/music/music.tpl.html","<h2>music</h2><p>{{music.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/radio-tv/radio-tv.tpl.html","<h2>radioTv</h2><p>{{radioTv.ctrlName}}</p>")}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/search/search-overlay.tpl.html",'<div class="search-overlay"><div class="search-results"><span class="glyphicon glyphicon-remove close">X</span><div><input type="text" name="q" ng-model="searchq"> <a class="search-btn close" href="#/search/{{searchq}}"><span class="close">Search</span></a></div><nav ng-include="\'scripts/states/search/search.tpl.html\'"></nav></div></div>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/search/search.tpl.html",'<header class="channelBanner" horizontal="" layout="" center=""><h2>Here\'s {{search.searchResults.length}} videos that match the search results for "{{search.q}}"</h2><p></p></header><section items="" horizontal="" layout="" wrap=""><div class="animate-repeat" item="" ng-repeat="video in search.searchResults | limitTo:21" channel="{{video.getText(\'video.channel\')}}"><div content=""><div meta="" horizontal="" start-justified="" layout=""><div class="channelName" self-center="">{{video.getText(\'video.channel\')}}</div></div><div poster="" style="background-image:url(\'{{video.getImageView(\'video.poster\', \'column\').url}}\');background-size:cover;background-position: 50% 50%;background-repeat:no-repeat;"></div><div caption="" absolute=""><h2 title=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}" horizontal="" layout=""><span flex="" self-center="">{{video.getText(\'video.title\')}}</span><core-icon class="play-icon" icon="av:play-circle-outline" self-center=""></core-icon></a></h2><div intro=""><a href="#/{{video.getText(\'video.channel\')}}/{{video.id}}/{{video.slug}}">{{video.getText(\'video.shortlede\')}}</a></div></div></div></div></section>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("scripts/states/view-video/view-video.tpl.html",'<article class="videoFrame" layout="column"><header layout="row" layout-align="space-between center" class="videoTitle"><h1>{{viewVideo.title}}</h1></header><div class="videoEmbed"><div class="flex-video"><video id="video" class="sublime" poster="{{viewVideo.poster}}" width="640" height="360" title="{{viewVideo.title}}" data-sharing-url="http://beta.tomorrowpictures.com" data-sharing-title="{{viewVideo.title}}" data-sharing-text="Watch {{viewVideo.title}}" data-sharing-twitter-text="Watch {{viewVideo.title}}" data-embed-type="auto" data-uid="{{viewVideo.youtubeID}}" data-youtube-id="{{viewVideo.youtubeID}}" data-autoresize="fill" preload="none"></video></div></div><div class="bottomPanel"><section class="bottomContent"><div class="posted">This Video Was Posted:<time am-time-ago="viewVideo.date" am-preprocess="utc"></time></div><div class="title">{{viewVideo.intro}}</div><div class="description" ng-bind-html="viewVideo.content"></div></section><section class="related" flex=""><h2 class="title">View Related Videos</h2><div class="item" horizontal="" start-justified="" layout="" ng-repeat="related in viewVideo.relatedResults"><img class="related-thumb" src="{{related.getImageView(\'video.poster\', \'icon\').url}}" alt=""><div class="caption" flex="" style="margin-left:10px;"><h2>{{related.getText(\'video.title\')}}</h2><p>{{related.getText(\'video.shortlede\')}}</p><a style="display:block;" href="#/{{related.getText(\'video.channel\')}}/{{related.id}}/{{related.slug}}">View Video</a></div></div></section></div></article>')}])}();