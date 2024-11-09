const express = require('express')
const router = express.Router()

const orderController = require('../controllers/orderController')

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: Order management operations
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Add a new order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user placing the order
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                       description: ID of the product
 *                     quantity:
 *                       type: integer
 *                       description: Quantity of the product
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', orderController.addOrder)

/**
 * @swagger
 * /order/user:
 *   get:
 *     summary: Get orders of a specific user
 *     tags: [Order]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user whose orders are to be fetched
 *     responses:
 *       200:
 *         description: List of user orders
 *       404:
 *         description: User orders not found
 */
router.get('/user', orderController.getUserOrders) // user

/**
 * @swagger
 * /order:
 *   get:
 *     summary: Get all orders
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: List of all orders
 *       403:
 *         description: Unauthorized, only accessible by admin
 */
router.get('/', orderController.getOrders) // admin

module.exports = router
