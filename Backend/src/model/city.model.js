import mongoose from "mongoose"

const citySchema = mongoose.Schema({
    name: {type: String, required: true},
    addresses: {type: Array, required: true}
},{
    versionKey: false
})

module.exports = mongoose.model("city", citySchema)