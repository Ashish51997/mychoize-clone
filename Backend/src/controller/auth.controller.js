require('dotenv').config()
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../model/user.model')

const newToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET_KEY)
}

const login = async(req, res) =>{
    let user = await User.findOne({email: req.body.email}).exec()

    if(! user) return res.status(400).json({status: "failed", message: "Invalid Email or Password"})

<<<<<<< HEAD
    const match = user.checkPassword(req.body.password)
=======
    const match = await user.checkPassword(req.body.password)
>>>>>>> a13a15eadd2bf3376d165b2f153630d5785baee7

    if(! match) return res.status(400).json({status: "failed", message: "Invalid Password"})

    const token = newToken(user)
<<<<<<< HEAD
=======

    user = await User.findOne({_id: user._id}, {password: 0}).lean().exec()
>>>>>>> a13a15eadd2bf3376d165b2f153630d5785baee7
    
    return res.status(200).json({user, token})

}

const register = async(req, res) =>{
    let user = await User.findOne({email: req.body.email}).exec()

    if(user) return res.status(400).json({status: "failed", message: "User already exists"})

    user = await User.create(req.body)

    const token = newToken(user)

    return res.status(201).json({user, token})
}

module.exports = {login, register}