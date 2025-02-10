const http = require('http');

class Server {
  constructor() {
    this.server = http.createServer(this.handleRequest);
  }

  handleRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem vindo ao Servidor node.js, utilizando o módulo nativo http do Node.js!!!');
  }

  start(port) {
    this.server.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  }
}

// Inicializar e iniciar o servidor
const server = new Server();
const port = process.env.PORT || 3000;
server.start(port);
