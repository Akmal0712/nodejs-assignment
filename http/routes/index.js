const v1 = require('./api/v1')

const router = (app) => {
    app.use('/', v1)
}

module.exports = router
