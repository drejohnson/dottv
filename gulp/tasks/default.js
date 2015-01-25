'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
  runSequence('styles', ['jshint', 'html', 'images', 'fonts', 'copy'], cb);
});
