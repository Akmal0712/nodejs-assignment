const VehiclesInfoModel = require('../models/VehiclesInfo')

const get = async (req, res) => {
    try {
        let { page, limit } = req.query

        limit = Number(limit) || 10
        page = Number(page) || 1
        const skip = limit * (page - 1)

        const result = await VehiclesInfoModel.find().limit(limit).skip(skip)

        return res.json(result)
    }
    catch (e) {
        console.log(e)
    }
}

const getById = async (req, res) => {
   try {
       const id = req.params.id
       const result = await VehiclesInfoModel.findOne( { _id: id})

       return res.json(result)
   }
   catch (e) {
       res.json(e)
   }
}

module.exports = {
    get,
    getById
}
