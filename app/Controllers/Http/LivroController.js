'use strict'
const Livro = use('App/Models/Livro')
const Database = use('Database')

class LivroController {
  // metodo para lista todos os livros cadastrados
  async index () {
    const livros = Livro.query()
    .with('genero')
    .with('avaliacoes')
    .fetch()
    return livros
  }

  /*async index() {
    const livros = await Database.raw(`
      SELECT a.*, COUNT(b.id) AS qtd_avaliacoes
      FROM livros as a LEFT JOIN avaliacaos AS b
      ON a.id = b.livro_id GROUP BY a.id
      ORDER BY a.titulo`)
    return livros.rows
  }*/

  // metodo para gravar um livro na base de dados
  async store({ auth, request, response }) {
    const data = request.only([
      'titulo',
      'autor',
      'resumo',
      'editora',
      'ano',
      'genero_id'
    ])
    const livro = await Livro.create({ ...data })
    return livro
  }

  // metodo para buscar um livro na base de dados
  async show({ params }) {
    const livro = await Livro.findOrFail(params.id)
    await livro.load('images')
    //await livro.load('avaliacoes')
    return livro
  }

  // metodo de atualização
  async update({ params, request, response }) {
    const livro = await Livro.findOrFail(params.id)

    const data = request.only([
      'titulo',
      'autor',
      'resumo',
      'editora',
      'ano',
      'genero_id'
    ])

    livro.merge(data)
    await livro.save()
    return livro
  }

  //metodo de deleção
  async destroy({ params, auth, response }) {
    const livro = await Livro.findOrFail(params.id)
    await livro.delete()
  }
}

module.exports = LivroController
