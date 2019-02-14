const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Camisetas = mongoose.model('camisetas');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/tienda', (req, res, next) => {
  Camisetas.find((err, camisetas) => {

    if (err) return next(err);

    res.render('tienda', {
      title: 'Tienda de Camisetas',
      camisetas: camisetas
    });

  });
});
