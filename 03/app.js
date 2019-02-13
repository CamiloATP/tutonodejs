// Se crea la variable express donde se importa la libreria express
var express = require('express');

// Se crea la variable express donde se importa la libreria fs(fileSystem)
var fs = require('fs');

// Se crea una instacia de express()
var app = express();

// Se define una ruta
app.use(express.static(__dirname + '/public'));

// Se gestionan las rutas..
// ----------------------------
app.get('/',function(req, res){
  res.sendFile('index.html');
});

// Se hace uso del puerto 3000
app.listen(3000);

//----

// var express = require('express'); // <-- express.js
// var server = express();
//
// var messages = [];
// var responses = [];
//
// server.get('/', function (req, res){
//   res.send('hello word');
// });
//
// server.get('/messages', function (req, res){
//   responses.push(res);
//       // res.send(messages + '<script>setTimeout(function(){window.location.reload()}, 1000);</script>');
// });
//
// server.get('/messages/:message', function (req, res){
//   messages.push(req.params.message);
//
//   responses.forEach(function (res){
//     res.send(messages + '<script>window.location.reload()</script>');
//   });
//
//   res.send('tu mensaje es: '+req.params.message);
// });
//
// server.listen(3000);
