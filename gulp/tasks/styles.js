'use strict';

var gulp         = require('gulp');
var $            = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer-core');
var cssnext      = require('cssnext');
var lost         = require('lost');
var nested       = require('postcss-nested');
var mixins       = require('postcss-mixins');
var conditionals = require('postcss-conditionals');
var minmax       = require('postcss-media-minmax');
var mqpacker     = require('css-mqpacker');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').styles;

gulp.task('styles', function () {
  var processors = [
      cssnext(),
      minmax,
      mixins,
      nested,
      conditionals,
      lost(),
      mqpacker,
      autoprefixer({browsers: ['last 2 version']}),
  ];
  return gulp.src(config.src)
  .pipe($.changed('build/styles', {extension: '.ccss'}))
  .pipe($.sourcemaps.init())
  .pipe($.postcss(processors))
  .on('error', handleErrors)
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest(config.tmp))
  // Concatenate And Minify Styles
  // .pipe$.if('*.css', $.csso()))
  .pipe(gulp.dest(config.dest))
  .pipe($.size({title: 'styles'}));
});
