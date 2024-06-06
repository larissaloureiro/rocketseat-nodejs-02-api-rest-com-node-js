import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { env } from './env'

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, { prefix: 'transactions' })

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
