import type { HttpContext } from '@adonisjs/core/http'
import Comic from '../models/comic.js'

export default class ComicsController {
  // GET /comics
  public async index({ request, response }: HttpContext) {
    const comics = await Comic.all()
    
    // Check if the request wants HTML
    if (request.accepts(['html'])) {
      return response.attachment('public/index.html')
    }
    
    // Return JSON for API requests
    return response.ok({ data: comics })
  }

  // GET /comics/:id
  public async show({ params, response }: HttpContext) {
    const comic = await Comic.find(params.id)
    if (!comic) {
      return response.notFound({ message: 'Comic not found' })
    }
    return response.ok({ data: comic })
  }

  // POST /comics
  public async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'author', 'genre', 'description', 'releaseYear'])
    const comic = await Comic.create(data)
    return response.created({ data: comic })
  }

  // PUT /comics/:id
  public async update({ params, request, response }: HttpContext) {
    const comic = await Comic.find(params.id)
    if (!comic) {
      return response.notFound({ message: 'Comic not found' })
    }

    const data = request.only(['title', 'author', 'genre', 'description', 'releaseYear'])
    comic.merge(data)
    await comic.save()
    
    return response.ok({ data: comic })
  }

  // DELETE /comics/:id
  public async destroy({ params, response }: HttpContext) {
    const comic = await Comic.find(params.id)
    if (!comic) {
      return response.notFound({ message: 'Comic not found' })
    }

    await comic.delete()
    return response.ok({ message: 'Comic deleted successfully' })
  }
}