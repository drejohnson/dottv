System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "stage": 0
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "bower:*": "jspm_packages/bower/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.0-beta.0",
    "angular-animate": "github:angular/bower-angular-animate@1.5.0-beta.0",
    "angular-material": "github:angular/bower-material@0.11.4",
    "angular-mocks": "npm:angular-mocks@1.5.0-beta.0",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.5.0-beta.0",
    "angular-socialshare": "npm:angular-socialshare@0.1.14",
    "angular-touch": "github:angular/bower-angular-touch@1.5.0-beta.0",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "angular-youtube-embed": "github:brandly/angular-youtube-embed@1.1.1",
    "angulartics": "github:angulartics/angulartics@0.20.1",
    "angulartics-google-analytics": "github:angulartics/angulartics-google-analytics@0.1.1",
    "babel": "npm:babel-core@5.8.24",
    "babel-runtime": "npm:babel-runtime@5.8.24",
    "clean-css": "npm:clean-css@3.4.3",
    "core-js": "npm:core-js@1.1.4",
    "css": "github:systemjs/plugin-css@0.1.19",
    "express-prismic": "npm:express-prismic@0.3.0",
    "falcor": "npm:falcor@0.1.13",
    "falcor-http-datasource": "npm:falcor-http-datasource@0.1.2",
    "lodash": "npm:lodash@3.10.1",
    "moment": "github:moment/moment@2.10.6",
    "normalize.css": "github:necolas/normalize.css@3.0.3",
    "rx": "npm:rx@4.0.0",
    "rx-angular": "npm:rx-angular@0.0.14",
    "text": "github:systemjs/plugin-text@0.0.2",
    "video.js": "npm:video.js@5.0.0",
    "videogular": "github:2fdevs/bower-videogular@1.3.2",
    "videogular-analytics": "github:2fdevs/bower-videogular-analytics@1.3.2",
    "videogular-buffering": "github:2fdevs/bower-videogular-buffering@1.3.2",
    "videogular-controls": "github:2fdevs/bower-videogular-controls@1.3.2",
    "videogular-overlay-play": "github:2fdevs/bower-videogular-overlay-play@1.3.2",
    "videogular-poster": "github:2fdevs/bower-videogular-poster@1.3.2",
    "videogular-themes-default": "github:2fdevs/bower-videogular-themes-default@1.3.2",
    "videogular-youtube": "github:NamPNQ/bower-videogular-youtube@2.0.4",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.5.0-beta.0"
    },
    "github:angular/bower-angular-animate@1.5.0-beta.0": {
      "angular": "github:angular/bower-angular@1.5.0-beta.0"
    },
    "github:angular/bower-angular-aria@1.5.0-beta.0": {
      "angular": "github:angular/bower-angular@1.5.0-beta.0"
    },
    "github:angular/bower-material@0.11.4": {
      "angular": "github:angular/bower-angular@1.5.0-beta.0",
      "angular-animate": "github:angular/bower-angular-animate@1.5.0-beta.0",
      "angular-aria": "github:angular/bower-angular-aria@1.5.0-beta.0",
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "github:brandly/angular-youtube-embed@1.1.1": {
      "angular": "github:angular/bower-angular@1.5.0-beta.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:necolas/normalize.css@3.0.3": {
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.24": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.4.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:define-properties@1.1.2": {
      "foreach": "npm:foreach@2.0.5",
      "object-keys": "npm:object-keys@1.0.9"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:es5-shim@4.1.15": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:express-prismic@0.3.0": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "prismic.io": "npm:prismic.io@1.3.3",
      "promise": "npm:promise@7.0.4",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:falcor-http-datasource@0.1.2": {
      "xmlhttprequest": "npm:xmlhttprequest@1.7.0"
    },
    "npm:falcor-json-graph@1.1.5": {
      "falcor-path-syntax": "npm:falcor-path-syntax@0.2.1"
    },
    "npm:falcor@0.1.13": {
      "asap": "npm:asap@2.0.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "falcor-json-graph": "npm:falcor-json-graph@1.1.5",
      "falcor-path-syntax": "npm:falcor-path-syntax@0.2.1",
      "falcor-path-utils": "npm:falcor-path-utils@0.3.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.0.4",
      "rx": "npm:rx@4.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:for-each@0.3.2": {
      "is-function": "npm:is-function@1.0.1"
    },
    "npm:global@4.3.0": {
      "process": "npm:process@0.5.2"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-function@1.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash-compat@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:object.assign@2.0.3": {
      "define-properties": "npm:define-properties@1.1.2",
      "object-keys": "npm:object-keys@1.0.9"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-headers@2.0.0": {
      "for-each": "npm:for-each@0.3.2",
      "trim": "npm:trim@0.0.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:prismic.io@1.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:rust-result@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "individual": "npm:individual@2.0.0"
    },
    "npm:rx-angular@0.0.14": {
      "rx": "npm:rx@4.0.0"
    },
    "npm:rx@4.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:safe-json-parse@4.0.0": {
      "rust-result": "npm:rust-result@1.0.0"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:tsml@1.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:video.js@5.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "global": "npm:global@4.3.0",
      "lodash-compat": "npm:lodash-compat@3.10.1",
      "object.assign": "npm:object.assign@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-json-parse": "npm:safe-json-parse@4.0.0",
      "tsml": "npm:tsml@1.0.1",
      "videojs-font": "npm:videojs-font@1.3.0",
      "videojs-ie8": "npm:videojs-ie8@1.1.0",
      "videojs-swf": "npm:videojs-swf@5.0.0-rc1",
      "vtt.js": "github:gkatsev/vtt.js@vjs-v0.12.1",
      "xhr": "npm:xhr@2.1.0"
    },
    "npm:videojs-font@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:videojs-ie8@1.1.0": {
      "es5-shim": "npm:es5-shim@4.1.15"
    },
    "npm:xhr@2.1.0": {
      "global": "npm:global@4.3.0",
      "once": "npm:once@1.1.1",
      "parse-headers": "npm:parse-headers@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:xmlhttprequest@1.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    }
  }
});
