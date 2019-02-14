// Example model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CamisetaSchema = new Schema({
  color: String,
  precio: String,
  descripcion: String,
  imagen: String
},{collection: 'camiseta'});

mongoose.model('camisetas', CamisetaSchema);
