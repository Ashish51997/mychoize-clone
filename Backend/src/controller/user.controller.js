const express = require('express')
const router = express.Router()
const protect = require('../middleware/protect')

const User = require('../model/user.model')

router.get("", async(req, res) => {
    const user = await User.find({}).lean().exec()
    res.status(200).json({data: user})
})

router.patch("/profile/:id", protect, async(req, res) => {
    const id = req.params.id
    const user = await User.findByIdAndUpdate(id, req.body, {new: true})
    res.status(203).json({data: user})
})

module.exports = router