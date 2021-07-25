const express = require('express')
const router = express.Router()

const City = require('../model/city.model')

router.get("", async(req, res) => {
    const city = await City.find({}).lean().exec()
    res.status(200).json({data: city})
})

module.exports = router