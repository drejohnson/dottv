'use strict';

var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config');
var browserSync = require('browser-sync');
var modRewrite  = require('connect-modrewrite');
var reload      = browserSync.reload;

// Watch Files For Changes & Reload
gulp.task('serve', ['styles'], function () {
  browserSync({
    port: 3333,
    notify: false,
    // Customize the BrowserSync console logging prefix
    logPrefix: 'FEDS',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['.tmp', 'src'],
    middleware: [
      modRewrite([
				'^([^.]+)$ /index.html [L]'
			])
    ]
  });

  gulp.watch(['src/**/*.html'], ['html:partials', reload]);
  gulp.watch(['src/styles/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['src/scripts/**/*.js'], ['html:partials','jshint']);
  gulp.watch(['src/images/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], function () {
  browserSync({
    port: 3333,
    notify: false,
    logPrefix: 'FEDS',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: 'build',
    middleware: [
      modRewrite([
				'^([^.]+)$ /index.html [L]'
			])
    ]
  });

  gulp.watch(['src/**/*.html'], ['html:partials', reload]);
  gulp.watch(['src/styles/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['src/scripts/**/*.js'], ['html:partials','jshint']);
  gulp.watch(['src/images/**/*'], reload);
});
