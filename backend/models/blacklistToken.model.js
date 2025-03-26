const mongoose = require('mongoose')
const { create, createSearchIndex } = require('./user.model')

const blackListTokenSchema = new mongoose.Schema({
    token:{
        type: String,
        required:true,
        unique:true
    },
    createAt:{
        type: Date,
        default: Date.now,
        expires: 86400
    }
})

module.exports = mongoose.model('BlacklistToken', blackListTokenSchema)