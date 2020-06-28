'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Avaliacao extends Model {
  // indica que a avaliação pertence a 1 livro
  livro () {
    return this.belongsTo('App/Models/Livro')
  }
  // indica que uma avaliação pertence a 1 user
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Avaliacao
