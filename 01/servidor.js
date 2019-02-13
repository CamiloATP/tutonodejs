var http = require('http');
var fs = require('fs'); // libreria para llamar archivos

http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.write('Hola Mundo');
  // res.end();

  res.writeHead(200, {'Content-Type':'text/html'});

  switch (req.url) {
    case '/':
      plantilla = "inicio.html";
      break;
    case '/nodejs':
      plantilla = "sobrenode.html";
      break;
    case '/lala':
      plantilla = "lala.html";
      break;
    default:
      plantilla = "404.html";
      break;
  }

  fs.readFile('./plantillas/'+ plantilla, function(error, datos){
    res.write(datos);
    res.end();
  });

}).listen(3000, 'localhost');

// Con la ruta http://localhost:3000 trabaja mejor en este contexto con nginx node.js
console.log('El servidor se muestra en http://localhost:3000');
