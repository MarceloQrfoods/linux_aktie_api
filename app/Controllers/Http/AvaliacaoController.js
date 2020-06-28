'use strict'
const Avaliacao = use('App/Models/Avaliacao')

class AvaliacaoController {

  async index () {
    const avaliacoes = Avaliacao.query()
    .with('livro')
    .with('user')
    .fetch()
    return avaliacoes
  }

  async indexPlivro ({ params }) {
    const avaliacoes = await Avaliacao
    .query()
    .where('livro_id', '=', params.id)
    .with('livro')
    .with('user')
    .fetch()
    return avaliacoes
  }

  async store ({ auth, request, response }) {
    const data = request.only([
      'descricao',
      'nota',
      'user_id',
      'livro_id'
    ])
    const avaliacao = await Avaliacao.create({ ...data })
    return avaliacao
  }

  async show ({ params }) {
    const avaliacao = await Avaliacao.findOrFail(params.id)
    await avaliacao.load('livro')
    await avaliacao.load('user')
    return avaliacao
  }

  async update ({ params, request, response }) {
    const avaliacao = await Avaliacao.findOrFail(params.id)
    const data = request.only([
      'descricao',
      'nota',
      'user_id',
      'livro_id'
    ])

    avaliacao.merge(data)
    await avaliacao.save()
    return avaliacao
  }

  async destroy ({ params, auth, response }) {
    const avaliacao = await Avaliacao.findOrFail(params.id)
    await avaliacao.delete()
  }
}

module.exports = AvaliacaoController
