'use strict'
let mongoose = require('mongoose')

module.exports = mongoose.model('Page', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}))
