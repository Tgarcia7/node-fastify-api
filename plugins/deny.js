import fp from 'fastify-plugin'

// Deny IP example
export default fp(async (fastify, _opts) => {
  fastify.addHook('onRequest', async (request) => {
    if (request.ip === '211.133.33.113') {
      const error = new Error('Forbidden')
      error.status = 403
      throw error
    }
  })
})
