'use strict'

const Image = use('App/Models/Image')
const Livro = use('App/Models/Livro')
const Helpers = use('Helpers')
class ImageController {
  async store ({ params, request }) {
    const livro = await Livro.findOrFail(params.id)

    const images = request.file('image', {
      types: ['image'],
      size: '2mb'
    })

    await images.moveAll(Helpers.tmpPath('uploads'), file => ({
      name: `${Date.now()}-${file.clientName}`
    }))

    if (!images.movedAll()) {
      return images.errors()
    }

    await Promise.all(
      images
        .movedList()
        .map(image => livro.images().create({ path: image.fileName }))
    )
  }
  async show ({params}){
    const livros = Livro.query()
    const image = Image.getUrl({params})
    return image
  }





}

module.exports = ImageController
