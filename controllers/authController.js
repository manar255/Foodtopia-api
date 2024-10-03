const authService = require('../services/authService')
const userService = require('../services/userService')
const signUp = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phone, password, confirmPassword } = req.body;
        // generate new otp and send
        const otp = authService.generateOTP();

        // create new user
        const user = await userService.createUser({ firstName, lastName, email, phone, password, otp });

        //TODO: send msg with otp
        await authService.sendSMS(phone, otp);

        //return response
        res.status(200).json({ message: 'sign up done successful' });

    } catch (err) {

        console.error('Error sign up:');
        next(err);

    }
}
const verifyOTP = async (req, res, next) => {
    try {
        const { phone, otp } = req.body;

        const user = await userService.verfiyUser(phone,otp);
        console.log(user);
        
        res.status(200).json({ message: 'your phone is verified' });

    } catch (err) {

        console.error('Error verify otp');
        next(err);

    }
}

const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        //check if user exist
        const user = await userService.findUser(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email' });
        }
        if (!user.isVerified) {
            return res.status(401).json({ message: 'Your email is not verified' });
        }
        //check if password is correct
        const isMatch = await authService.comparePassword(user, password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        //generate token
        const token = authService.generateToken({ id: user.id });

        //return response
        res.status(200).json({ token: token, message: 'sign in done successful' })

    } catch (err) {

        console.error('Error sign up:');
        next(err);

    }
}


module.exports = {
    signUp,
    signIn,
    verifyOTP
};