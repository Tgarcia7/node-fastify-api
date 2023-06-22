import fp from 'fastify-plugin'
import mongooseDriver from 'fastify-mongoose-driver'
import config from '../config.js'

async function dbConnector (fastify, _options) {
  fastify.register(mongooseDriver.plugin,
    {
      uri: `${config.DB_URI}/${config.DB_NAME}`,
      settings: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        config: {
          autoIndex: true,
        },
      }
    },
    (err) => {
      if (err) throw err
    }
  )

  fastify.after(err => {
    if (err) {
      fastify.log.fatal({ message: 'DB connection error', err })
      process.exit(1)
    }

    fastify.log.info('DB initialized successfully')
  })

  fastify.addHook('onClose', async () => {
    const mongoose = mongooseDriver.decorator()
    await mongoose.instance.connection.close()
  })
}

export default fp(dbConnector)
