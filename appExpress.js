const express = require('express');

class Server {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    // Configurar o middleware
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    // Configurar as rotas
    this.app.get('/', (req, res) => {
      res.send('Bem vindo ao Servidor node.js, utilizando Node.js e o framework Express!!!');
    });

    // Adicione mais rotas conforme necessário
  }

  start(port) {
    this.app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  }
}

// Inicializar e iniciar o servidor
const server = new Server();
const port = process.env.PORT || 3000;
server.start(port);
