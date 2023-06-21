export const healthSchema = {
  url: '/health',
  operationId: 'health',
  tags: ['general'],
  response: {
    200: {
      type: 'object',
      additionalProperties: false,
      properties: {
        status: { 'enum': ['UP', 'DOWN'] }
      }
    }
  }
}

export default async function (fastify, _opts) {
  fastify.get('/health', { schema: healthSchema }, async function (request, reply) {
    return reply.code(200).send({ status: 'UP' })
  })
}
