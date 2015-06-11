'use strict';

var gulp         = require('gulp');
var $            = require('gulp-load-plugins')();
var config       = require('../config').html;

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', ['polybuild', 'html:partials'], function () {
  var assets = $.useref.assets({searchPath: '{.tmp,src}'});
  var opts = {comments:true};

  return gulp.src(config.src)
    .pipe(assets)
    .pipe($.if('*.bundle.js', $.ngAnnotate(
      {
        single_quotes: true
      }
    )))
    // Concatenate And Minify JavaScript
    .pipe($.if('*.js', $.uglify({preserveComments: 'some'})))
    // Concatenate And Minify Styles
    // In case you are still using useref build blocks
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    // Minify Any HTML
    // .pipe($.if('*.html', $.minifyHtml(opts)))
    // Output Files
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: 'html'}));
});

gulp.task('html:partials', function () {

  return gulp.src(config.partialsSrc)
  .pipe($.minifyHtml({
    empty: true,
    spare: true,
    quotes: true
  }))
  .pipe($.ngHtml2js({
    declareModule: true,
    moduleName: 'templates',
    prefix: 'scripts/'
  }))
  .pipe($.concat("templates.js"))
  .pipe($.uglify())
  .pipe(gulp.dest(config.partialsDest))
  .pipe($.size({title: 'html partials'}));
});
