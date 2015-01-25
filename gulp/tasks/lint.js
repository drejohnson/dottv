'use strict';

var gulp         = require('gulp');
var $            = require('gulp-load-plugins')();
var browserSync  = require('browser-sync');
var config       = require('../config').scripts;

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src(config.src)
  .pipe(browserSync.reload({stream:true}))
  .pipe($.jshint())
  .pipe($.jshint.reporter('jshint-stylish'))
  .pipe($.if(!browserSync.active, $.jshint.reporter('default')));
});
