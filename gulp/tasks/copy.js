'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config  = require('../config');

// Copy All Files At The Root Level (app)
gulp.task('copy', function () {
  return gulp.src([
    'src/*',
    'src/elements/*.build.{html,js}',
    '!src/*.html',
    '!src/bower_components',
    '!src/webcomponents'
    ], {
      dot: true
    }).pipe(gulp.dest('build'))
    .pipe($.size({title: 'copy'}));
  });
