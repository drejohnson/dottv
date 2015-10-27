import moment from 'moment';
import jwt from 'jwt-simple';
import config from '../config';
import User from '../models/user';

// Login Required Middleware
function ensureAuthenticated(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  const token = req.headers.authorization.split(' ')[1];

  let payload = null;
  try {
    payload = jwt.decode(token, config.TOKEN_SECRET);
  } catch (err) {
    return res.status(401).send({ message: err.message });
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' });
  }
  req.user = payload.sub;
  next();
}

// Generate JSON Web Token
function createJWT(user) {
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(5, 'seconds').unix()
  };
  console.log(jwt.encode(payload, config.TOKEN_SECRET));
  return jwt.encode(payload, config.TOKEN_SECRET);
}

const user = { _id: '1'};
createJWT(user);

// Get User
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

export const getUser = (req, res) => {
  if (req.user) return res.redirect('/');
  res.render('account/login', {
    title: 'Login'
  });
};
