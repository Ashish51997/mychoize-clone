require('dotenv').config()
const mongoose = require('mongoose')
const connect = () =>{
    return mongoose.connect(process.env.MONGO_CONNECT,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    })
}

module.exports = connect;