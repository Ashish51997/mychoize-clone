const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
},{
    versionKey: false
})

userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next()

    bcrypt.hash(this.password, 8, (err, hash) => {
        if(err) return next(err)
        this.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function(password){
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, (err, same) => {
            if(err) return reject(err)
            return resolve(same)
        })
    })
}

module.exports = mongoose.model("user", userSchema)