
'use strict'

const Schema = use('Schema')

class LivroSchema extends Schema {
  up () {
   this.create('livros', table => {
      table.increments()
      table.string('titulo').notNullable()
      table.string('autor').notNullable()
      table.string('resumo').notNullable()
      table.string('editora').notNullable()
      table.integer('ano').notNullable()
      table
        .integer('genero_id')
        .unsigned()
        .references('id')
        .inTable('generos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('livros')
  }
}
module.exports = LivroSchema
