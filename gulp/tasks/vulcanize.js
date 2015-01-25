'use strict';

var gulp         = require('gulp');
var $            = require('gulp-load-plugins')();
var config       = require('../config').polymer;
var browserSync  = require('browser-sync');

gulp.task('vulcanize', function () {
  return gulp.src(config.src)
  .pipe($.vulcanize({
    dest: config.dest,
    strip: true,
    inline: true,
    abspath: 'src'
  }))
  .pipe(gulp.dest(config.dest))
  .pipe(browserSync.reload({stream:true}));
});
