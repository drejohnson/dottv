var src = 'src';
var tmp = '.tmp';
var dest = 'build';

module.exports = {
  base: {
    src: src,
    tmp: tmp,
    dest: dest
  },
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  scripts: {
    src: [src + '/scripts/*.js', src + '/{states,components}/**/*.js'],
    tmp: tmp + '/scripts',
    dest: dest + '/scripts',
    entries: [src + './app/scripts/index.js'],
    bundleName: 'index.bundle.js'
  },
  styles: {
    src: [src + '/styles/main.scss', src + '/styles/components/components.scss'],
    tmp: tmp + '/styles',
    dest: dest + '/styles',
    options: {
      precision: 10
    }
  },
  images: {
    src: src + '/assets/images/**/*',
    dest: dest + '/assets/images'
  },
  fonts: {
    src: src + '/assets/fonts/**/*',
    dest: dest + '/assets/fonts'
  },
  html: {
    src: src + '/index.html',
    partialsSrc: src + '/scripts/{states,components}/**/*.html',
    partialsDest: src + '/scripts/templates',
    dest: dest
  },
  polymer: {
    src: src + '/elements.html',
    tmp: tmp + '/webcomponents',
    dest: dest
  },
  templates: {
    src: [
      src + '/scripts/states/**/*.html',
      src + '/scripts/components/**/*.html'
    ],
    dest: src + '/scripts'
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
