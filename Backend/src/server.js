const express = require('express')
const app = express()

const connect = require('../src/config/db')

app.use(express.json())

const carController = require('./controller/car.controller') 
const userController = require('./controller/user.controller')
const {login, register} = require('./controller/auth.controller')

app.use("/cars", carController)
app.use("/users", userController)
app.post("/login", login)
app.post("/register", register)

const start = async() => {
    await connect()
    app.listen(2255, ()=>{
        console.log("listening on port 2255")
    })
}

module.exports = start;