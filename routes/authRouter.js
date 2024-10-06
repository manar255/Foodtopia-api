const express = require('express')

const router = express.Router()

const authController = require('../controllers/authController');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: 
 */
/**
 * @swagger
 * /auth/signUp:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     description: Create a new user account by providing user details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The user's first name.
 *               lastName:
 *                 type: string
 *                 description: The user's last name.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address.
 *               phone:
 *                 type: string
 *                 description: The user's phone number.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password.
 *               confirmPassword:
 *                 type: string
 *                 format: password
 *                 description: Confirm the user's password.
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - phone
 *               - password
 *               - confirmPassword
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input or user already exists
 *       500:
 *         description: Internal server error
 *
 */

router.post('/signUp', authController.signUp);
/**
 * @swagger
 * /auth/verifyPhone:
 *   put:
 *     summary: Verify a phone number with OTP
 *     tags: [Auth]
 *     description: Verifies a phone number by checking the OTP (One Time Password) sent to the user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 description: The user's phone number.
 *                 example: "01112850863"
 *               otp:
 *                 type: string
 *                 description: The OTP sent to the user's phone.
 *                 example: "123456"
 *             required:
 *               - phone
 *               - otp
 *     responses:
 *       200:
 *         description: Phone number verified successfully.
 *       400:
 *         description: Invalid OTP or phone number.
 *       500:
 *         description: Internal server error.
 */

router.put('/verifyPhone',authController.verifyOTP)
/**
 * @swagger
 * /auth/signIn:
 *   post:
 *     summary: Sign in a user
 *     tags: [Auth]
 *     description: Authenticate a user by checking their email and password, and return a JWT token if successful.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address.
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password.
 *                 example: "password123"
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User signed in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The JWT token.
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                 message:
 *                   type: string
 *                   example: "sign in done successful"
 *       401:
 *         description: Invalid email, password, or unverified email
 *       500:
 *         description: Internal server error
 */

router.post('/signIn', authController.signIn)

/**
 * @swagger
 * /auth/forgetPassword/sendEmail:
 *   put:
 *     summary: Send OTP to verify phone number
 *     tags: [Auth]
 *     description: Generate and send an OTP to the user's phone number to verify it.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 description: The user's phone number.
 *                 example: "01112850863"
 *             required:
 *               - phone
 *     responses:
 *       200:
 *         description: OTP sent to the phone number
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "OTP sent to your phone"
 *       500:
 *         description: Internal server error
 */
router.put('/forgetPassword/sendEmail', authController.sendOTPToVerifyPhone);

/**
 * @swagger
 * /auth/forgetPassword/verifyOTP:
 *   put:
 *     summary: Verify the OTP
 *     tags: [Auth]
 *     description: Verify the OTP sent to the user's phone.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 description: The user's phone number.
 *                 example: "01112850863"
 *               otp:
 *                 type: string
 *                 description: The OTP sent to the user's phone.
 *                 example: "123456"
 *             required:
 *               - phone
 *               - otp
 *     responses:
 *       200:
 *         description: Phone verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "your phone is verified"
 *       401:
 *         description: Invalid OTP
 *       500:
 *         description: Internal server error
 */
router.put('/forgetPassword/verifyOTP', authController.FPverifyOTP);

/**
 * @swagger
 * /auth/forgetPassword/resetPassword:
 *   put:
 *     summary: Reset password
 *     tags: [Auth]
 *     description: Reset the user's password after verifying their phone number.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 description: The user's phone number.
 *                 example: "01112850863"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The new password to set.
 *                 example: "newPassword123"
 *               confirmPassword:
 *                 type: string
 *                 format: password
 *                 description: Confirmation of the new password.
 *                 example: "newPassword123"
 *             required:
 *               - phone
 *               - password
 *               - confirmPassword
 *     responses:
 *       200:
 *         description: Password updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "your password updated"
 *       500:
 *         description: Internal server error
 */
router.put('/forgetPassword/resetPassword', authController.resetPassword);


module.exports = router;