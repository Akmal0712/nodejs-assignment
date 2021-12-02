const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/index')
const mongoConnect = require('./database/mongodb')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router(app)
mongoConnect()

const PORT = process.env.APP_PORT || 3000
app.listen(PORT, () => {
    console.log(`HTTP Server working on port ${PORT}`)
})
