/**
 * Module dependencies.
 */
import fs from 'fs';
import http from 'http';
import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import compression from 'compression';
import session from 'express-session';
import errorHandler from 'errorhandler';
import redis from 'redis';
import prismicio from 'express-prismic';

import config from './config';
import Configuration from './config/prismic-configuration';

/**
 * Controllers (route handlers).
 */
import * as apiController from './controllers/api';

const client = redis.createClient();

/**
 * Create Express server.
 */
const app = express();

/**
 * Prismic.io configuration.
 */
const prismic = prismicio.Prismic;
prismic.init(Configuration);

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(cookieParser());
app.use(session({secret: 'illmatic1994VSready2die1994', saveUninitialized: true, resave: true}));

const staticOptions = {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['htm', 'html'],
  index: 'index.html',
  lastModified: true,
  maxAge: '1d',
  setHeaders(res, path, stat) {
    res.set('x-timestamp', Date.now());
    res.header('Cache-Control', 'public, max-age=1d');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }
};

app.use('/', express.static('static', staticOptions ));
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(errorHandler());

const handleError = (res, err) => {
  if (err.status === 404) {
    res.status(404).send('404 not found');
  } else {
    res.status(500).send('Error 500: ' + err.message);
  }
};

// Routes
app.route('/').get((req, res) => {
  res.render('index');
});

app.get('/api', apiController.getApi);
app.get('/api/videos', apiController.getVideos);
app.get('/api/videos/:id', apiController.getVideo);
app.get('/api/featured', apiController.getFeatured);
app.get('/api/videos/channel/docu-series', apiController.getDocuSeries);
app.get('/api/videos/channel/radio-tv-film', apiController.getRadioTvFilm);
app.get('/api/videos/channel/music', apiController.getMusic);
app.get('/api/videos/channel/comedy', apiController.getComedy);
app.get('/api/videos/channel/lifestyle', apiController.getLifestyle);
app.get('/api/related/:id', apiController.getRelated);

app.get('/api/posts', apiController.getPosts);
app.get('/api/posts/:id', apiController.getPost);

app.get('/api/search/:q', apiController.getSearch);

app.route('/preview').get(prismic.preview);

app.route('/').get((req, res) => {
  res.render('index');
});

app.route('/*').get((req, res) => {
  // AJAX requests are aren't expected to be redirected to the AngularJS app
  if (req.xhr) {
    return res.status(404).send(req.url + ' not found');
  }

  // `sendfile` requires the safe, resolved path to your AngularJS app
  res.render('index');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  console.log('development');
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export default app;
