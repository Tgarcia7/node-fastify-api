import { healthSchema } from './schema.js'

export default async function (fastify, _opts) {
  fastify.get('/', { schema: healthSchema }, (request, reply) => {
    return reply.send({ status: 'UP' })
  })
}
