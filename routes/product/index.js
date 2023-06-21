import Product from '../../controllers/product.js'
import { 
  getSchema,
  getAllSchema,
  postSchema,
  putSchema,
  deleteSchema
} from './schemas.js'

async function router (fastify, _opts) {
  fastify.get('/:id', { schema: getSchema }, Product.get)
  fastify.get('/', { schema: getAllSchema }, Product.getAll)
  fastify.post('/', { schema: postSchema }, Product.create)
  fastify.put('/:id', { schema: putSchema }, Product.update)
  fastify.delete('/:id', { schema: deleteSchema }, Product.remove)
}

export default router
