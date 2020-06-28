'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Genero extends Model {
  //indica que um genero pertence a varios livros
  livros () {
    return this.belongsToMany('App/Models/Livro')
  }
}

module.exports = Genero
