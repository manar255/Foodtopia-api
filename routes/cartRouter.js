const express = require('express')
const router = express.Router()

const cartController = require('../controllers/cartController')


/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management operations
 */

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Add an item to the user's cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - itemId
 *               - quantity
 *             properties:
 *               itemId:
 *                 type: integer
 *                 description: The ID of the item to add
 *                 example: 1
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the item
 *                 example: 2
 *     responses:
 *       200:
 *         description: Item added to cart successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item added to cart"
 *       404:
 *         description: Item not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item not found"
 *       500:
 *         description: Server error
 */

router.post('/',cartController.addToCart);


module.exports=router;