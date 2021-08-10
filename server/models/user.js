const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    currentLocation: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model('users', userSchema)
module.exports = User