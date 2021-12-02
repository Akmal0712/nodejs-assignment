const NatsConnection = require('nats')
require('dotenv').config()

const host = process.env.NATS_HOST || 'http://localhost'
const port = process.env.NATS_PORT || '4222'

const nats = NatsConnection.connect({ servers: [`${host}:${port}`] })

module.exports = nats
