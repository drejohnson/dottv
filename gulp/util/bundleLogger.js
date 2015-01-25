/* bundleLogger
   ------------
   Provides gulp style logs to the bundle method in browserify.js
*/

'use strict';

var $ = require('gulp-load-plugins')();
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
  start: function(filepath) {
    startTime = process.hrtime();
    $.util.log('Bundling', $.util.colors.green(filepath) + '...');
  },

  watch: function(bundleName) {
    $.util.log('Watching files required by', $.util.colors.yellow(bundleName));
  },

  end: function(filepath) {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    $.util.log('Bundled', $.util.colors.green(filepath), 'in', $.util.colors.magenta(prettyTime));
  }
};
