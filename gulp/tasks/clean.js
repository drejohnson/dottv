'use strict';

var gulp   = require('gulp');
var del    = require('del');
var config = require('../config');

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'build', '!build/.git', 'src/scripts/templates'], {dot: true}));
