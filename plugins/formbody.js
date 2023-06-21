import fp from 'fastify-plugin'
import formbody from '@fastify/formbody'

export default fp(async function (fastify, _opts) {
  fastify.register(formbody)
})
