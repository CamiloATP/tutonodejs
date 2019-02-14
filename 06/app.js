

const express = require('express');
const config = require('./config/config');
const glob = require('glob');
const mongoose = require('mongoose');

mongoose.connect(config.db);
const db = mongoose.connection;
db.on('error', () => {
  throw new Error('unable to connect to database at ' + config.db);
});

const models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
const app = express();

module.exports = require('./config/express')(app, config);

const server = app.listen(config.port, () => {
  console.log('Express server listening on port ' + config.port);
});

const io = require('socket.io').listen(server);

// Se escuchará el evento connection, cuando alguien se conecta al socket
io.on('connection', (socket) => {
  // se envia un mensaje a todo los que estan escuchando por el socket
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
