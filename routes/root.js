export default async function (fastify, _opts) {
  fastify.get('/', (request, reply) => {
    return reply.send({ root: true })
  })
}
