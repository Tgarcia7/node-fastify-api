# NODE-FASTIFY-API

RESTful API written with Node.js and built with Fastify framework.

### Initial config 

Create a `.env` file based on the content of `.env.example`.

### Run

```bash
$ docker-compose up -d
```

### Lint

```bash
$ docker-compose run --rm api bin/lint
```

### Test

```bash
$ docker-compose run --rm api bin/test
```

### Docs - OpenAPI

```bash
# Start the service
$ docker-compose up -d
# Visit the following url
# http://localhost:3000/docs/
```
