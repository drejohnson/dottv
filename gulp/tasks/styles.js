'use strict';

var gulp         = require('gulp');
var $            = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer-core');
var mqpacker     = require('css-mqpacker');
var csswring     = require('csswring');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').styles;

gulp.task('styles', function () {
  var processors = [
    autoprefixer({browsers: ['last 3 version']})
  ];
  return gulp.src(config.src)
  .pipe($.changed('build/styles', {extension: '.scss'}))
  .pipe($.sourcemaps.init())
  .pipe($.sass(config.options))
  .on('error', handleErrors)
  .pipe($.sourcemaps.write())
  .pipe($.postcss(processors))
  .pipe(gulp.dest(config.tmp))
  // Concatenate And Minify Styles
  // .pipe$.if('*.css', $.csso()))
  .pipe(gulp.dest(config.dest))
  .pipe($.size({title: 'styles'}));
});
