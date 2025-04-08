
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  titulo: String,
  subtitulo: String,
  corpo: String,
  imagem: String,
  data: String,
  fonte: String,
  video: String,
  audio: String
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
