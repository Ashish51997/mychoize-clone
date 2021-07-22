const express = require('express')
const router = express.Router()

const User = require('../model/user.model')

router.get("", async(req, res) => {
    const user = await User.find({}).lean().exec()
    res.status(200).json({data: user})
})

module.exports = router