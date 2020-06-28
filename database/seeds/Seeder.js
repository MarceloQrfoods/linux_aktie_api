'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')
const Hash = use('Hash')

class TesteSeeder {
  async run () {
    const senha = await Hash.make('123')

    await Database.table('users').insert([
      { username: 'Admin', email: 'adm@email.com', password: senha },
      { username: 'Joao', email: 'user1@email.com', password: senha },
      { username: 'Fernando', email: 'user2@email.com', password: senha },
      { username: 'Andrey', email: 'user3@email.com', password: senha },
      { username: 'Welton', email: 'user4@email.com', password: senha },
    ])
    await Database.table('generos').insert([
      { nome: 'Classico' },
      { nome: 'Infantil' },
      { nome: 'Revista' },
      { nome: 'Ficção' },
      { nome: 'Poesia' },
      { nome: 'Tecnologia' },
      { nome: 'Literatura Moderna' },
    ])
    await Database.table('livros').insert([
      { titulo: 'Aladin ', autor: 'Joao', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'Bras Cubas ', autor: 'Joao', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'Machado de Assis ', autor: 'Joao', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'Sertão Veredas ', autor: 'Joao', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'O Velho ', autor: 'Joao', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'Coração Partido ', autor: 'Joao', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'Me deixe partir ', autor: 'Joao', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'Eramos Seis ', autor: 'Joao', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'Não há outro lado ', autor: 'Joao', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'um querido amigo ', autor: 'Joao', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'Venha ver ', autor: 'Joao', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'Coisas Boas ', autor: 'Joao', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'Biblia Sagrada ', autor: 'Jesus', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'ES6 ', autor: 'Marcelo', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '6' },
      { titulo: 'JAVA Script ', autor: 'Marcelo', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '6' },
      { titulo: 'Postgres SQL ', autor: 'Marcelo', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '6' },
      { titulo: 'ADONIS JS ', autor: 'Marcelo', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '6' },
      { titulo: 'VUE JS ', autor: 'Marcelo', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '6' },
      { titulo: 'Segunda gerra mundial ', autor: 'Marcelo', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '1' },
      { titulo: 'React JS ', autor: 'Marcelo', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '6' },
      { titulo: 'Java Avancado ', autor: 'Marcelo', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '6' },
      { titulo: 'Node JS ', autor: 'Marcelo', resumo: 'bom livro', editora: 'epoca', ano: '2020', genero_id: '6' },
    ])

    await Database.table('avaliacaos').insert([
      { descricao: 'Bom ', nota: 10, livro_id:1, user_id:2 },
      { descricao: 'EXcelente', nota: 10, livro_id:1, user_id:1 },
      { descricao: 'Gostei muito', nota: 10, livro_id:1, user_id:4 },
      { descricao: 'show', nota: 10, livro_id:1, user_id:1 },

      { descricao: 'Bom ', nota: 10, livro_id:2, user_id:2 },
      { descricao: 'EXcelente', nota: 10, livro_id:2, user_id:1 },
      { descricao: 'Gostei muito', nota: 10, livro_id:2, user_id:4 },
      { descricao: 'show', nota: 10, livro_id:2, user_id:1 },

      { descricao: 'Bom ', nota: 10, livro_id:3, user_id:1 },
      { descricao: 'EXcelente', nota: 10, livro_id:3, user_id:3 },
      { descricao: 'Gostei muito', nota: 10, livro_id:3, user_id:1 },
      { descricao: 'show', nota: 10, livro_id:3, user_id:1 },

      { descricao: 'Bom ', nota: 10, livro_id:4, user_id:1 },
      { descricao: 'EXcelente', nota: 10, livro_id:4, user_id:2 },
      { descricao: 'Gostei muito', nota: 10, livro_id:4, user_id:1 },
      { descricao: 'show', nota: 10, livro_id:4, user_id:1 },

      { descricao: 'Bom ', nota: 10, livro_id:5, user_id:1 },
      { descricao: 'EXcelente', nota: 10, livro_id:5, user_id:3 },
      { descricao: 'Gostei muito', nota: 10, livro_id:5, user_id:1 },
      { descricao: 'show', nota: 10, livro_id:5, user_id:1 },

      { descricao: 'Bom ', nota: 10, livro_id:6, user_id:1 },
      { descricao: 'EXcelente', nota: 10, livro_id:6, user_id:1 },
      { descricao: 'Gostei muito', nota: 10, livro_id:6, user_id:1 },
      { descricao: 'show', nota: 10, livro_id:6, user_id:1 },

      { descricao: 'Bom ', nota: 10, livro_id:7, user_id:1 },
      { descricao: 'EXcelente', nota: 10, livro_id:7, user_id:3 },
      { descricao: 'Gostei muito', nota: 10, livro_id:7, user_id:1 },
      { descricao: 'show', nota: 10, livro_id:7, user_id:1 },

      { descricao: 'Bom ', nota: 10, livro_id:8, user_id:1 },
      { descricao: 'EXcelente', nota: 10, livro_id:8, user_id:1 },
      { descricao: 'Gostei muito', nota: 10, livro_id:8, user_id:2 },
      { descricao: 'show', nota: 10, livro_id:8, user_id:1 },

      { descricao: 'Bom ', nota: 10, livro_id:9, user_id:1 },
      { descricao: 'EXcelente', nota: 10, livro_id:9, user_id:1 },
      { descricao: 'Gostei muito', nota: 10, livro_id:9, user_id:1 },
      { descricao: 'show', nota: 10, livro_id:9, user_id:1 },

      { descricao: 'Bom ', nota: 10, livro_id:10, user_id:3 },
      { descricao: 'EXcelente', nota: 10, livro_id:10, user_id:2 },
      { descricao: 'Gostei muito', nota: 10, livro_id:10, user_id:1 },
      { descricao: 'show', nota: 10, livro_id:10, user_id:1 },

      { descricao: 'Bom ', nota: 10, livro_id:11, user_id:1 },
      { descricao: 'EXcelente', nota: 10, livro_id:11, user_id:4 },
      { descricao: 'Gostei muito', nota: 10, livro_id:11, user_id:1 },
      { descricao: 'show', nota: 10, livro_id:1, user_id:2 },
    ])
  }
}

module.exports = TesteSeeder
