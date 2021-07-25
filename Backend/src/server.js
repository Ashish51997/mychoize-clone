const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 2255
const connect = require('../src/config/db')

app.use(express.json())
app.use(cors())

const carController = require('./controller/car.controller') 
const userController = require('./controller/user.controller')
const cityController = require('./controller/city.controller')
const {login, register} = require('./controller/auth.controller')

app.use("/cars", carController)
app.use("/users", userController)
app.use("/cities", cityController)
app.post("/login", login)
app.post("/register", register)

const start = async() => {
    await connect()
    app.listen(port, ()=>{
        console.log(`listening on port ${port}`)
    })
}

module.exports = start;