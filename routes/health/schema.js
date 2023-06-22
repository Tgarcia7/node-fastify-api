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
