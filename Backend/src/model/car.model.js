const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    car_name: {type: String, required: true},
    car_image: {type: String, required: true},
    car_type: {type: String, required: true},
    fuel_type: {type: String, require: true},
    gear_type: {type: String, required: true},
    carrying_capacity: {type: String, required: true},
    seater: {type: String, required: true},
    free_kms: {type: Number, required: true},
    limited_kms_price: {type: Number, required: true},
    unlimited_kms_price: {type: Number, required: true},
    extra_kms_price: {type: Number, required: true},
    refundable_deposit: {type: Number, required: true},
    extra_luggage_carrier_price: {type: Number, required: true},
    insurance_price: {type: Number, required: true},
    available: true
},{
    versionKey: false
})

module.exports = mongoose.model("car", carSchema)