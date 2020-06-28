'use strict'
const Genero = use('App/Models/Genero')

class GeneroController {

  async index () {
    const generos = Genero.query()
    .fetch()
    return generos
  }

  async store ({ auth, request, response }) {
    const data = request.only([
      'nome',
    ])
    const genero = await Genero.create({ ...data })
    return genero
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = GeneroController
