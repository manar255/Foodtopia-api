const express = require('express')

const router = express.Router()

const authController = require('../controllers/authController');

/**
 * @swagger
 * /auth/signUp:
 *   post:
 *     summary: Register a new user
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
 */

router.post('/signUp', authController.signUp);

router.post('/signIn', authController.signIn)

module.exports = router;