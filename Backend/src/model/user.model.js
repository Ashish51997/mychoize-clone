const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    gender: {type: String},
    dob: {type: String},
    pan_no: {type: Number},
    address: {type: String},
    state: {type: String},
    pincode: {type: Number},
    documents: {
        dl_front: {type: String},
        dl_back: {type: String},
        adhar_front: {type: String},
        adhar_back: {type: String}
    },
    upcoming_bookings: [],
    booking_history: [],
    subscription_booking: [],
    can_booking: []
})

module.exports = mongoose.model("user", userSchema)