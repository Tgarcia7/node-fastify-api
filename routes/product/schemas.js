const productSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['name'],
  properties: {
    _id: { type: 'string' },
    name: { type: 'string' },
    picture: { type: 'string' },
    price: { type: 'number' },
    category: { 'enum': ['computers', 'phones', 'accessories'] },
    description: { type: 'string' }
  }
}

export const pathSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['id'],
  properties: {
    id: { type: 'string' }
  }
}

export const postSchema = {
  url: '/',
  operationId: 'product-post',
  tags: ['product'],
  body: productSchema,
  response: {
    201: productSchema
  },
  config: {
    swagger: {
      exposeHeadRoute: true,
    }
  }
}

export const putSchema = {
  url: '/:id',
  operationId: 'product-put',
  tags: ['product'],
  body: productSchema,
  params: pathSchema
}

export const deleteSchema = {
  url: '/:id',
  operationId: 'product-delete',
  tags: ['product'],
  params: pathSchema
}

export const getSchema = {
  url: '/:id',
  operationId: 'product-get',
  tags: ['product'],
  params: pathSchema,
  response: {
    200: productSchema
  }
}

export const getAllSchema = {
  url: '/',
  operationId: 'product-get-all',
  tags: ['product'],
  response: {
    200: {
      type: 'array',
      items: productSchema
    }
  }
}
