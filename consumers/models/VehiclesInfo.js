const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VehiclesInfo = new Schema({
    time: {
        type: Number,
        required: false
    },
    energy: {
        type: Number,
        required: true,
        default: 0
    },
    gps: {
        type: String,
        required: false,
    },
    odo: {
        type: Number,
        required: false,
    },
    speed: {
        type: Number,
        required: false,
    },
    soc: {
        type: Number,
        required: false,
    }
})

const VehiclesInfoModel = mongoose.model('vehicles_info', VehiclesInfo)

module.exports = VehiclesInfoModel
