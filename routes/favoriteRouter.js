const express = require('express')
const router = express.Router()

const favoriteController = require('../controllers/favoriteController')


/**
 * @swagger
 * tags:
 *   name: Favorite list
 *   description: Favorite list management operations
 */

/**
 * @swagger
 * /favorite:
 *   get:
 *     summary: Retrieve a list of favorite items for the user
 *     tags: [Favorite list]
 *     responses:
 *       200:
 *         description: A list of favorite items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ItemId:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Item name"
 *                   description:
 *                     type: string
 *                     example: "Item description"
 *       500:
 *         description: Server error
 */

router.get('/',favoriteController.getFavoriteItems)
/**
 * @swagger
 * /favorite/{itemId}:
 *   post:
 *     summary: Add an item to the user's favorite list
 *     tags: [Favorite list]
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         description: The ID of the item to add to the favorite list
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Item added to favorite list successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item added to favorite list."
 *       500:
 *         description: Server error
 */

router.post('/:itemId',favoriteController.addToFavorite)
/**
 * @swagger
 * /favorite/{itemId}:
 *   delete:
 *     summary: Remove an item from the user's favorite list
 *     tags: [Favorite list]
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         description: The ID of the item to remove from the favorite list
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Item removed from favorite list successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item removed from favorite list."
 *       500:
 *         description: Server error
 */

router.delete('/:itemId',favoriteController.removeFromFavorite)

module.exports=router;