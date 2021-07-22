const express = require('express')
const router = express.Router()

const Car = require('../model/car.model')

router.get("", async(req, res) => {
    const car = await Car.find({}).lean().exec()
    res.status(200).json({data: car})
})

module.exports = router