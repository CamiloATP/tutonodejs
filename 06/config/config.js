const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: '06'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/midbmongo'
  },

  test: {
    root: rootPath,
    app: {
      name: '06'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/06-test'
  },

  production: {
    root: rootPath,
    app: {
      name: '06'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/06-production'
  }
};

module.exports = config[env];
