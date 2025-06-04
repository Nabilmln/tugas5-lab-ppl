/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ComicsController from '../app/controllers/comics_controller.js'

// Serve static files
router.get('/', async ({ response }) => {
  return response.redirect('/api/comics')
})

// Comic API routes
router.get('/api/comics', async (ctx) => {
  return new ComicsController().index(ctx)
})

router.get('/api/comics/:id', async (ctx) => {
  return new ComicsController().show(ctx)
})

router.post('/api/comics', async (ctx) => {
  return new ComicsController().store(ctx)
})

router.put('/api/comics/:id', async (ctx) => {
  return new ComicsController().update(ctx)
})

router.delete('/api/comics/:id', async (ctx) => {
  return new ComicsController().destroy(ctx)
})
