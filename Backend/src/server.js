const express = require('express')
const app = express()
const port = process.env.PORT || 2255
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
    app.listen(port, ()=>{
        console.log(`listening on port ${port}`)
    })
}

module.exports = start;