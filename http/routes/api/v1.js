const route = require('express').Router()
const VehicleController = require('../../controllers/VehicleController')

route.get('/api/vehicles', VehicleController.get)
route.get('/api/vehicles/:id', VehicleController.getById)

module.exports = route
