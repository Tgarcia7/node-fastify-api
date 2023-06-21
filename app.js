import AutoLoad from '@fastify/autoload'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import mongooseDriver from 'fastify-mongoose-driver'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default async function (fastify, opts) {
  // Loads all plugins defined in plugins
  fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // Loads all plugins defined in routes
  fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

  fastify.addHook('onClose', async () => {
    const mongoose = mongooseDriver.decorator()
    await mongoose.instance.connection.close()
  })

  fastify.addHook('onReady', () => {
    fastify.swagger()
  })
}
