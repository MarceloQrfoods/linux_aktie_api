'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource('livros', 'LivroController')
  .apiOnly()
  .middleware('auth')
Route.post('livros/:id/images', 'ImageController.store')
  .middleware('auth')

Route.resource('generos', 'GeneroController')
  .apiOnly()
  .middleware('auth')

Route.resource('avaliacoes', 'AvaliacaoController')
  .apiOnly()
  .middleware('auth')
Route.get('avaliacoes/livro/:id/', 'AvaliacaoController.indexPlivro')
  .middleware('auth')

Route.get('images/:path', 'ImageController.show')
