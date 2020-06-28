'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvaliacaoSchema extends Schema {
  up () {
    this.create('avaliacaos', (table) => {
      table.increments()
      table.string('descricao').notNullable()
      table.integer('nota').notNullable()
      table
        .integer('livro_id')
        .unsigned()
        .references('id')
        .inTable('livros')
        .onUpdate('CASCADE')
        .onDelete('CASCADE').notNullable()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('avaliacaos')
  }
}

module.exports = AvaliacaoSchema
