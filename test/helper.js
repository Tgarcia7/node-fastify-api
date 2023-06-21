// This file contains code that we reuse
// between our tests.

import { build as buildApplication } from 'fastify-cli/helper.js'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const AppPath = join(__dirname, '..', 'app.js')

// Fill in this config with all the configurations
// needed for testing the application
export function config () {
  return {}
}

// automatically build and tear down our instance
export async function build (t) {
  // you can set all the options supported by the fastify CLI command
  const argv = [AppPath]

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  const app = await buildApplication(argv, config())

  // tear down our app after we are done
  t.teardown(app.close.bind(app))

  return app
}
