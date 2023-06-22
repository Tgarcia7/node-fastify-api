import fp from 'fastify-plugin'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'

export default fp(async function (fastify, _opts) {
  fastify.register(swagger, {
    swagger: {
      info: {
        title: 'Fastify API',
        description: 'RESTful API written with Node.js and built with Fastify framework.',
        version: '1.0.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost:3000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'product', description: 'Product related end-points' },
        { name: 'general', description: 'General end-points' }
      ]
    }
  })

  fastify.register(swaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'none', // expand/not all the documentations none|list|full
      deepLinking: false
    },
    uiHooks: {
      onRequest: function (request, reply, next) { next() },
      preHandler: function (request, reply, next) { next() }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, _request, _reply) => { return swaggerObject },
    transformSpecificationClone: true
  })

  fastify.addHook('onReady', () => {
    fastify.swagger()
  })
})
