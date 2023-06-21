import mongo from 'mongodb'
import Product from '../models/product.js'

async function create (request, reply) {
  try {
    const product = new Product({
      name: request.body.name,
      picture: request.body.picture,
      price: request.body.price,
      category: request.body.category,
      description: request.body.description
    })

    await product.save()
    reply.code(201)
    return product
  } catch (error) {
    request.log.error(error)
    throw Error('Error creating the product')
  }
}

async function get (request, reply) {
  try {
    const { id } = request.params
    const filter = { '_id': new mongo.ObjectId(id) }
    
    const product = await Product.findOne(filter)
    if (!product) return reply.notFound()
    return product
  } catch (error) {
    request.log.error(error)
    throw Error('Error obtaining the product')
  }
}

async function getAll(request, reply) {
  try {
    const products = await Product.find({})
    if (!products) return reply.notFound()
    return products
  } catch (error) {
    request.log.error(error)
    throw Error('Error obtaining the products')
  }
}

async function update (request, reply) {
  try {
    const { id } = request.params
    const filter = { '_id': new mongo.ObjectId(id) }
    const product = {
      name: request.body.name,
      picture: request.body.picture,
      price: request.body.price,
      category: request.body.category,
      description: request.body.description
    }

    await Product.findOneAndUpdate(filter, product)
    reply.code(204)
  } catch (error) {
    request.log.error(error)
    throw Error('Error updating the product')
  }
}

async function remove (request, reply) {  
  try {
    const { id } = request.params
    const filter = { '_id': new mongo.ObjectId(id) }

    await Product.findOneAndDelete(filter)
    reply.code(204)
  } catch (error) {
    request.log.error(error)
    throw Error('Error deleting the product')
  }
}

export default {
  get,
  getAll,
  create,
  update,
  remove
}
