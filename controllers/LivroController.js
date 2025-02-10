class LivroController {
    constructor(prisma) {
      this.prisma = prisma;
    }
  
    // Método para obter todos os livros
    async getAllLivros(req, res) {
      try {
        const livros = await this.prisma.livro.findMany();
        res.json(livros);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros' });
      }
    }
  
    // Método para obter um livro pelo ID
    async getLivroById(req, res) {
      try {
        const livroId = Number(req.params.id);
        const livro = await this.prisma.livro.findUnique({ where: { id: livroId } });
        if (livro) {
          res.json(livro);
        } else {
          res.status(404).json({ error: 'Livro não encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livro' });
      }
    }
  
    // Método para adicionar um novo livro
    async addLivro(req, res) {
      try {
        const novoLivro = req.body;
        const livro = await this.prisma.livro.create({ data: novoLivro });
        res.status(201).json(livro);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar livro' });
      }
    }
  
    // Método para atualizar um livro existente
    async updateLivro(req, res) {
      try {
        const livroId = Number(req.params.id);
        const livroAtualizado = req.body;
        const livro = await this.prisma.livro.update({
          where: { id: livroId },
          data: livroAtualizado,
        });
        res.json(livro);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar livro' });
      }
    }
  
    // Método para excluir um livro
    async deleteLivro(req, res) {
      try {
        const livroId = Number(req.params.id);
        await this.prisma.livro.delete({ where: { id: livroId } });
        res.json({ message: 'Livro excluído com sucesso' });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir livro' });
      }
    }
  }
  
  module.exports = LivroController;
  