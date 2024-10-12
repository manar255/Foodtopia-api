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
 *   get:
 *     summary: Retrieve a list of items in the user's cart
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: A list of items in the cart
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   itemId:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Item name"
 *                   price:
 *                     type: number
 *                     example: 19.99
 *                   quantity:
 *                     type: integer
 *                     example: 2
 *       500:
 *         description: Server error
 */

router.get('/',cartController.getItemsInCart)

/**
 * @swagger
 * /cart/{itemId}:
 *   post:
 *     summary: Add an item to the user's cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         description: The ID of the item to add
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *             properties:
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the item to add
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


router.post('/:itemId',cartController.addToCart);
/**
 * @swagger
 * /cart/{itemId}:
 *   put:
 *     summary: Update the quantity of an item in the cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         description: The ID of the item to update
 *         schema:
 *           type: integer
 *       - in: body
 *         name: quantity
 *         required: true
 *         description: New quantity for the item
 *         schema:
 *           type: object
 *           properties:
 *             quantity:
 *               type: integer
 *     responses:
 *       200:
 *         description: Item quantity updated successfully
 *       404:
 *         description: Item not found in cart
 *       500:
 *         description: Internal server error
 */

router.put('/:itemId',cartController.updateItemQuantity);
/**
 * @swagger
 * /cart/{itemId}:
 *   delete:
 *     summary: Remove an item from the cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         description: The ID of the item to remove
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item removed from cart
 *       500:
 *         description: Internal server error
 */

router.delete('/:itemId',cartController.removeItemFromCart);


module.exports=router;