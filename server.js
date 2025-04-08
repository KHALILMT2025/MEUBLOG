
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/posts', postRoutes);

// MongoDB Atlas conectado com senha real
mongoose.connect('mongodb+srv://jacqueskhalil:SENHA_REAL@cluster0.rykgot4.mongodb.net/meublog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Atlas conectado!');
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
})
.catch(err => console.error('Erro na conexão com o MongoDB:', err));
