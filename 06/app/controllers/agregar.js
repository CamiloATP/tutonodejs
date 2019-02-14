const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Camisetas = mongoose.model('camisetas');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/agregar', (req, res, next) => {
    res.render('agregar');
});

router.post('/agregar', (req, res, next) => {
  var nuevoRegistro = new Camisetas({
    color: req.body.color,
    precio: req.body.precio,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen
  });

  nuevoRegistro.save();

  res.redirect('tienda');

});
