import { fastify } from './server';

fastify.listen(process.env.FASTIFY_PORT || 3333, '0.0.0.0', function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})