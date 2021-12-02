const nats = require('./natsConnection')
const VehiclesInfoModel = require('./models/VehiclesInfo')
const IncidentsReportsModel = require('./models/IncidentsReports')
const mongoConnect = require('./database/mongodb')

mongoConnect()
console.log('subscriber...')

nats.subscribe('vehicle.test-bus-1',async (data) => {
    try {
        await VehiclesInfoModel.create(JSON.parse(data))
        console.log(JSON.parse(data))
    }
    catch (error) {
        await IncidentsReportsModel.create({ text: error })
    }
})
