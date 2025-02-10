const express = require('express');
const livroRouters = require('./routes/LivroRouters'); // Verifique se o caminho está correto

const app = express();
app.use(express.json());
app.use('/api', livroRouters);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
