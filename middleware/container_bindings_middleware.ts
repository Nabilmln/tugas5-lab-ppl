import { HttpContext } from '@adonisjs/core/http'
import { Logger } from '@adonisjs/core/logger'
import type { NextFn } from '@adonisjs/core/types/http'

/**
 * The container bindings middleware binds classes to their request
 * specific value using the container resolver.
 *
 * - We bind "HttpContext" class to the "ctx" object
 * - And bind "Logger" class to the "ctx.logger" object
 */
export default class ContainerBindingsMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    // Set CORS headers
    ctx.response.header('Access-Control-Allow-Origin', '*')
    ctx.response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    ctx.response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    // Handle preflight requests
    if (ctx.request.method() === 'OPTIONS') {
      return ctx.response.status(204)
    }

    // Bind container values
    ctx.containerResolver.bindValue('HttpContext', ctx)
    ctx.containerResolver.bindValue('Logger', ctx.logger)

    return next()
  }
}
