'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Livro extends Model {
  //indica que um livro pode ter varias fotos
  images () {
    return this.hasMany('App/Models/Image')
  }
  // indica que um livro pertence a um genero
  genero () {
    return this.belongsTo('App/Models/Genero')
  }
  // indica que um livro pode ter varias avaliacoes
  avaliacoes () {
    return this.hasMany('App/Models/Avaliacao')
  }
}

module.exports = Livro
