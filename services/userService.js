const { where } = require("sequelize");
const User = require("../models/User");

const authService = require('./authService');
const { use } = require("../routes/authRouter");
const createUser = async (userData) => {
    try {
        //chick if user is exist
        const oldUser = await User.findOne({ where: { email: userData.email } });
        if (oldUser) {
            const err = new Error('Email is already in use');
            err.status = 400;
            throw err;
        }
        //hash password
        const hashedPassword = await authService.hashPassword(userData.password);
        //create new user
        const user = await User.create({
            ...userData,
            password: hashedPassword
        })
        return user;

    } catch (error) {
        throw error;
    }
};

const findUser = async (query) => {
    try {
        const user = await User.findOne({ where: query });
        return user;
    } catch (error) {
        throw error;
    }
}

const verfiyUser = async (phone,otp) => {
    try {
        // find user by email
        const user = await findUser({ phone });
        if (!user) {
            const err = new Error('User not found');
            err.status = 404;
            throw err;
            }
        //verfiy otp 
        const isMatch = user.otp === otp;

        if (!isMatch) {
            const err = new Error('Invalid OTP');
            err.status = 400;
            throw err;
        }

        //update user status to active
        await user.update({ isVerified: true });
        return user;
    } catch (error) {
        throw error;
    }
}

const updateUserOtp= async(phone,otp)=>{
    try {
        // find user by email
        const user = await findUser({ phone });
        if (!user) {
            const err = new Error('User not found');
            err.status = 404;
            throw err;
            }
        
        
        //update user status to active
        await user.update({ otp: otp });
        return user;
    } catch (error) {
        throw error;
    }
}
const verfiyUserOTP = async (phone,otp) => {
    try {
        // find user by email
        const user = await findUser({ phone });
        if (!user) {
            const err = new Error('User not found');
            err.status = 404;
            throw err;
            }
        //verfiy otp 
        const isMatch = user.otp === otp;



        return isMatch;
    } catch (error) {
        throw error;
    }
}

const resetPassword= async (phone, password) => {
    try {
        // find user by email
        const user = await findUser({ phone });
        if (!user) {
            const err = new Error('User not found');
            err.status = 404;
            throw err;
            }
        
        
        const hashedPassword=await authService.hashPassword(password);
        //update user password
        await user.update({ password: hashedPassword });



        return user;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    createUser,
    findUser,
    verfiyUser,
    updateUserOtp,
    verfiyUserOTP,
    resetPassword
}