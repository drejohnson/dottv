import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import systemjsBuilder from 'systemjs-builder';
import sync from 'run-sequence';
import serve from 'browser-sync';
import modRewrite from 'connect-modrewrite';
import del from 'del';
import precss from 'precss';
import lost from 'lost';
import calc from 'postcss-calc';
import yargs from 'yargs';

const $ = gulpLoadPlugins();
const reload = () => serve.reload();
const root = 'src';

// helper method for resolving paths
const resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

const resolveToComponents = (glob) => {
  glob = glob || '';
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
const paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  css: resolveToApp('**/_*.css'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  static: path.join(root, 'static/**/*'),
  entry: path.join(root, 'app/bootstrap.js'),
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
  dist: path.join(__dirname, 'static/')
};

gulp.task('styles', () => styleTask('.', ['**/_*.css']));

gulp.task('serve', gulp.series('styles', serveDev));

gulp.task('serve:dist', gulp.series(
  clean,
  gulp.parallel('styles', build, staticFiles),
  serveDist
));

gulp.task('dist', gulp.series(
  clean,
  gulp.parallel('styles', staticFiles),
  build
));

// gulp.task(build, gulp.series(
//   clean,
//   staticFiles
// ));

gulp.task(clean);
gulp.task(lint);
gulp.task(staticFiles);
gulp.task(build);
gulp.task(watch);
gulp.task(component);


// The default task (called when you run `gulp` from cli)
gulp.task('default', gulp.series('dist'));

// Clean
function clean() {
  return del([paths.dist]);
}

// Style tasks
// Compile and Automatically Prefix Stylesheets
function styleTask(stylesPath, srcs) {
  const processors = [
    precss(),
    lost(),
    calc()
  ];
  return gulp.src(srcs.map((src) => {
    return path.join(root + '/app', stylesPath, src);
  }))
  .pipe($.newer(stylesPath, {extension: '.css'}))
	.pipe($.sourcemaps.init())
  .pipe($.postcss(processors).on('error', console.error.bind(console)))
  .pipe($.rename((filepath) => {
    filepath.basename = path.basename(filepath.dirname);
  }))
	.pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest(path.join(root, 'app')));
}

function staticFiles() {
  return gulp.src(paths.static)
		.pipe(gulp.dest(paths.dist));
}

// Lint JavaScript
function lint() {
  return gulp.src([paths.js,
    '!**/*.spec.js'
  ])
  .pipe($.eslint())
  .pipe($.eslint.format())
  .on('error', (ev) => {
    const basePath = path.join(__dirname, root);
    const filename = ev.fileName.substr(basePath.length + 1);
  });
}

function build(done) {
  const dist = path.join(paths.dist + 'build.js');

  function scripts() {
    const Builder = systemjsBuilder;
    const builder = new Builder({
      baseURL: './',
    });
    builder.reset();
    builder.loadConfig('./jspm.config.js')
      .then(() => {
        return builder.buildStatic(resolveToApp('app.bootstrap'), dist, {minify: true, mangle: false, sourceMaps: true})
        .then(() => {
          // Also create a fully annotated minified copy
          return gulp.src(dist)
          .pipe(gulp.dest(paths.dist)),
          done;
        });
      });
  }
  return scripts();
}

// Browser-sync
function serveDev() {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    files: [].concat(
      [paths.js],
      [paths.css],
      paths.html
    ),
    server: {
      baseDir: [root, root + '/static'],
      // serve our jspm dependencies with the client folder
      routes: {
        '/jspm.config.js': './jspm.config.js',
        '/jspm_packages': './jspm_packages'
      }
    },
    middleware: [
      modRewrite([
        '^([^.]+)$ /index.html [L]'
      ])
    ]
  });
}

// Browser-sync Dist
function serveDist() {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    notify: false,
    logPrefix: 'FEDS',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    // will present a certificate warning in the browser.
    // https: true,
    server: 'dist',
    baseDir: 'dist',
    middleware: [
      modRewrite([
        '^([^.]+)$ /index.html [L]'
      ])
    ]
  });
}

// Rerun the task when a file changes
function watch() {
  gulp.watch( paths.html).on('change', reload);
  gulp.watch( paths.css).on('change', gulp.series('styles', reload));
  gulp.watch( paths.js).on('change', gulp.series(lint, reload));
}

function component() {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const camel = (val) => {
    return val.replace( /-([a-z])/ig, ( all, letter ) => letter.toUpperCase());
  };
  const name = yargs.argv.name;
  const upCaseName = cap(name);
  const camelCaseName = camel(upCaseName);
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
  .pipe($.template({
    name,
    upCaseName,
    camelCaseName
  }))
  .pipe($.rename((path) => {
    path.basename = path.basename.replace('temp', name);
  }))
  .pipe(gulp.dest(destPath));
}
