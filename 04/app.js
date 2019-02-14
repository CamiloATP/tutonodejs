var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));

// Datos
var camisetasDatos = [
  {titulo:"Naraja", imagen:"images/camiseta1.png"},
  {titulo:"Roja", imagen:"images/camiseta2.png"},
  {titulo:"Azul", imagen:"images/camiseta3.png"},
  {titulo:"Verde", imagen:"images/camiseta4.png"}
]

app.get('/', (req, res) => {
  res.render('index.pug',{
    titulo: "Index tienda",
    polera: "Manga corta",
    imagen: "camiseta4.png"
  });
});

app.get('/tienda', (req, res) => {
  res.render('tienda.pug',{
    titulo: "Pestaña Tienda",
    camisetas: camisetasDatos
  });
});

app.get('/tienda/comprar/:producto', (req, res) => {
  var obj = camisetasDatos.filter((producto, i) => {
    if(req.params.producto == producto.titulo){
      res.render('compra.pug', producto);
    }
  });
});

app.use((req, res) => {
  res.status(400);
  res.render('404.pug',{
    titulo: "404: Página no encontrada :("
  });
});

app.listen(3000);

console.log('Conectado en el puerto 3000');
