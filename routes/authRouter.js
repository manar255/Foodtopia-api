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
 *               username:
 *                 type: string
 *                 description: The user's username.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password.
 *             required:
 *               - username
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input or user already exists
 */
router.post('/signUp', authController.signUp);

router.post('/signIn',authController.signIn )

module.exports = router;