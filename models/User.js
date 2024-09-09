const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true

    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    otp:{
        type:String,
    }

}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);
module.exports = User;