const mongoose = require('mongoose')
require('dotenv').config()

const mongoConnect = async () => {
    const port = process.env.DB_MONGO_PORT || '27017'
    const name = process.env.DB_MONGO_NAME || 'admin'
    const host = process.env.DB_MONGO_HOST || 'localhost'

    await mongoose.connect(`mongodb://${host}:${port}/${name}`)
    console.log('MongoDB connected')
}

module.exports = mongoConnect
