import view from '@fastify/view'
import handlebars from 'handlebars'
import fp from 'fastify-plugin'

export default fp(async function (fastify, _opts) {
  fastify.register(view, {
    engine: {
      handlebars: handlebars
    },
    layout: './views/layout.hbs',
  })
})
