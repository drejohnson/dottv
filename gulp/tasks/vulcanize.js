'use strict';

var gulp         = require('gulp');
var $            = require('gulp-load-plugins')();
var polybuild    = require('polybuild')
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

gulp.task('polybuild', function() {
  return gulp.src('./src/elements/elements.html')
  .pipe(polybuild({
    maximumCrush: true
  }))
  .pipe(gulp.dest('./src/elements'))
  .pipe(browserSync.reload({stream:true}));
});
