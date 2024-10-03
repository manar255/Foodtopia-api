
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const vonage = require('../config/Vonage')

const speakeasy = require('speakeasy');
const { text } = require("body-parser");


const hashPassword = async (password) => {
    try {
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
}

const comparePassword = async (user, password) => {
    try {
        const isMatch = await bcrypt.compare(password, user.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const sendSMS = async (phone, otp) => {
    try {
        const text = `Your OTP is ${otp}`
        const from = "Foodtopia"
        const to = `20${phone}`

        //send msm
        await vonage.sms.send({ to, from, text });

    } catch (error) {
        throw error;
    }
}

const generateToken = (data) => {
    try {
        const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: '1h' });
        return token;
    } catch (error) {
        throw error;
    }
}

const generateOTP = () => {
    const secret = speakeasy.generateSecret({ length: 20 });
    const code = speakeasy.totp({
        secret: secret.base32,
        encoding: 'base32'
    });
    console.log(code)
    return code;

}

module.exports = {
    hashPassword,
    comparePassword,
    sendSMS,
    generateToken,
    generateOTP
}