const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    TenKhoa: {
        type: String,
        required: true,
        index: true
    },
    SoCBGD: {
        type: Number,
        required: true,
        index: true
    }
})

module.exports = mongoose.model('Khoa', UserSchema)
