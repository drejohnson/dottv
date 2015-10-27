export default {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'illmatic1994VSready2die1994',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/dottv',

  development: {
    isProduction: false,
    port: 3333,
    app: {
      name: 'ExpressJS Example Development'
    }
  },
  production: {
    isProduction: true,
    port: process.env.PORT || 8080,
    app: {
      name: 'ExpressJS Example Production'
    }
  },

  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || '',

  // OAuth 1.0
  TWITTER_KEY: process.env.TWITTER_KEY || '',
  TWITTER_SECRET: process.env.TWITTER_SECRET || ''
}[process.env.NODE_ENV || 'development'];
