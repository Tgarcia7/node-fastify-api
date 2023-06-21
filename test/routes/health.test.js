import { test } from 'tap'
import * as helper from '../helper.js'

test('health check route', async (t) => {
  const app = await helper.build(t)

  const res = await app.inject({
    url: '/health'
  })
  t.same(JSON.parse(res.payload), { status: 'UP' })
})

// inject callback style:
//
// test('default root route', (t) => {
//   t.plan(2)
//   const app = await build(t)
//
//   app.inject({
//     url: '/'
//   }, (err, res) => {
//     t.error(err)
//     t.same(JSON.parse(res.payload), { root: true })
//   })
// })
