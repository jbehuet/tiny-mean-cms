'use strict'
let mongoose = require('mongoose')

module.exports = mongoose.model('User', new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [(email) => {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        }, 'Please use a valid email address'],
    },
    firstname: String,
    lastname: String,
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
}))
