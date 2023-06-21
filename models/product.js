import mongooseDriver from 'fastify-mongoose-driver'
const mongoose = mongooseDriver.decorator()

const ProductSchema = new mongoose.instance.Schema({
  name: { type: String, required: true },
  picture: String,
  price: { type: Number, default: 0 },
  category: { type: String, enum: ['computers', 'phones', 'accessories'] },
  description: String
})

export default mongoose.instance.model('Product', ProductSchema)
