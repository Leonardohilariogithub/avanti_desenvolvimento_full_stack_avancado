const express = require('express');
const LivroController = require('../controllers/LivroController'); // Certifique-se de que o caminho está correto
const prisma = require('../config/prismaClient');

class LivroRouters {
  constructor() {
    this.router = express.Router();
    this.livroController = new LivroController(prisma);
    this.routes();
  }

  routes() {
    // Método GET para obter todos os livros
    this.router.get('/livros', (req, res) => {
      this.livroController.getAllLivros(req, res);
    });

    // Método GET para obter um livro pelo ID
    this.router.get('/livros/:id', (req, res) => {
      this.livroController.getLivroById(req, res);
    });

    // Método POST para adicionar um novo livro
    this.router.post('/livros', (req, res) => {
      this.livroController.addLivro(req, res);
    });

    // Método PUT para atualizar um livro existente
    this.router.put('/livros/:id', (req, res) => {
      this.livroController.updateLivro(req, res);
    });

    // Método DELETE para excluir um livro
    this.router.delete('/livros/:id', (req, res) => {
      this.livroController.deleteLivro(req, res);
    });
  }
}

module.exports = new LivroRouters().router;
