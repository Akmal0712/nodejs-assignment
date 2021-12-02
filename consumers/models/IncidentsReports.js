const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IncidentsReports = new Schema({
    text: {
        type: String,
        text: true
    }
})

const IncidentsReportsModel = mongoose.model('incidents_reports', IncidentsReports)

module.exports = IncidentsReportsModel
