// Se crea una variable donde se guardará la libreria express.js
var express = require('express');

// Se asigna la app de tipo express para gestionar rutas y demás...
var app = express();

// Se gestionan las rutas..
app.get('/', function(req, res){
  res.send("Hola mundo con express");
});


app.listen(3000, function(){
  console.log('La app esta funcionando en el puerto 3000');
});
