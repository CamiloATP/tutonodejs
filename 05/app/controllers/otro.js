const express = require('express');
const router = express.Router();
const Article = require('../models/article');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/otro', (req, res, next) => {
  res.render('otro');
});
