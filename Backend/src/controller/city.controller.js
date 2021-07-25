const express = require('express')
const router = express.Router()

const City = require('../model/city.model')

router.get("", async(req, res) => {
    const dd = await City.find({})
    console.log(dd)
    res.status(200).json({data: dd})
})

router.post("", async(req, res) => {
    const dd = await City.create(req.body)
    console.log(dd)
    res.status(201).json({data: dd})
})

module.exports = router