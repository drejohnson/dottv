import prismicio from 'express-prismic';
const prismic = prismicio.Prismic;
/**
 * Split into declaration and initialization for better performance.
 */
export const getApi = (req, res) => {
  const data = {
    message: [
      {welcome: 'Tomorrow Pictures TV root API endpoint'},
    ]
  };
  res.status(200).json(data);
};

// Get list of Videos
export const getVideos = (req, res) => {
  const item = prismic.withContext(req, res);
  item.query(prismic.Predicates.at('document.type', 'video'), {
    page: 1,
    pageSize: 21
  }, (err, data) => {
    res.status(200).json(data);
  });
};

// Get channel: Docu-Series
export const getDocuSeries = (req, res) => {
  const item = prismic.withContext(req, res);
  item.query(
    prismic.Predicates.any('my.video.channel', ['docu-series']), {
      page: 1,
      pageSize: 21
    }, (err, data) => {
      res.status(200).json(data);
    });
};

// Get channel: Radio-TV-Film
export const getRadioTvFilm = (req, res) => {
  const item = prismic.withContext(req, res);
  item.query(
    prismic.Predicates.any('my.video.channel', ['radio-tv-film']), {
      page: 1,
      pageSize: 21
    }, (err, data) => {
      res.status(200).json(data);
    });
};

// Get channel: Music
export const getMusic = (req, res) => {
  const item = prismic.withContext(req, res);
  item.query(
    prismic.Predicates.any('my.video.channel', ['music']), {
      page: 1,
      pageSize: 21
    }, (err, data) => {
      res.status(200).json(data);
    });
};

// Get channel: Comedy
export const getComedy = (req, res) => {
  const item = prismic.withContext(req, res);
  item.query(
    prismic.Predicates.any('my.video.channel', ['comedy']), {
      page: 1,
      pageSize: 21
    }, (err, data) => {
      res.status(200).json(data);
    });
};

// Get channel: Lifestyle
export const getLifestyle = (req, res) => {
  const item = prismic.withContext(req, res);
  item.query(
    prismic.Predicates.any('my.video.channel', ['lifestyle']), {
      page: 1,
      pageSize: 21
    }, (err, data) => {
      res.status(200).json(data);
    });
};

// Get featured
export const getFeatured = (req, res) => {
  const item = prismic.withContext(req, res);
  item.query(
    prismic.Predicates.at('document.type', 'featured'), {
      page: 1,
      pageSize: 21
    }, (err, data) => {
      res.status(200).json(data);
    });
};

// Get channel: Related
export const getRelated = (req, res) => {
  const item = prismic.withContext(req, res);
  const id = req.params['id'];
  item.getByID(id, () => {
    item.query(
      prismic.Predicates.similar(id, 10), {
        page: 1,
        pageSize: 6,
      }, (err, data) => {
        res.status(200).json(data);
      });
  });
};

// Get single Video
export const getVideo = (req, res) => {
  const item = prismic.withContext(req, res);
  const id = req.params['id'];
  item.getByID(id, (err, data) => {
    const html = data.getStructuredText('video.content').asHtml();
    // res.status(200).json(data);
    res.status(200).json([
      data,
      {html: html}
    ]);
  });
};

// Get Search results
export const getSearch = (req, res) => {
  const item = prismic.withContext(req, res);
  const q = req.params['q'];
  item.query(
    '[[:d = fulltext(document, "' + q + '")]]', {
    // prismic.Predicates.any('my.video.channel', ['lifestyle']), {
      page: 1,
      pageSize: 21
    }, (err, data) => {
      res.status(200).json(data);
    });
};

// Get list of Blog posts
export const getPosts = (req, res) => {
  const item = prismic.withContext(req, res);
  item.query(prismic.Predicates.at('document.type', 'blog'), {
    page: 1,
    pageSize: 21
  }, (err, data) => {
    res.status(200).json(data);
  });
};

// Get single Post
export const getPost = (req, res) => {
  const item = prismic.withContext(req, res);
  const id = req.params['id'];
  item.getByID(id, (err, data) => {
    const html = data.getStructuredText('blog.body').asHtml();
    // res.status(200).json(data);
    res.status(200).json([
      data,
      {html: html}
    ]);
  });
};

// Get list of Audio Posts
export const getAudioList = (req, res) => {
  const item = prismic.withContext(req, res);
  item.query(prismic.Predicates.at('document.type', 'audio'), {
    page: 1,
    pageSize: 21
  }, (err, data) => {
    res.status(200).json(data);
  });
};

// Get single Audio Post
export const getAudioDetail = (req, res) => {
  const item = prismic.withContext(req, res);
  const id = req.params['id'];
  item.getByID(id, (err, data) => {
    // res.status(200).json(data);
    res.status(200).json([
      data
    ]);
  });
};
