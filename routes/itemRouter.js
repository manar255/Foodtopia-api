const express = require('express')

const router = express.Router()

const itemController = require('../controllers/itemController')
const upload = require('../middlewars/uploadFiles');
const { image } = require('../config/Cloudinary');
/**
 * @swagger
 * tags:
 *   name: Item
 *   description: Item management operations
 */
/**

/**
 * @swagger
 * /item/{CategoryId}:
 *   post:
 *     summary: Add a new item to a category
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: CategoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the category to which the item belongs
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image file for the item
 *               title:
 *                 type: string
 *                 description: Title of the item
 *               price:
 *                 type: number
 *                 description: Price of the item
 *               description:
 *                 type: string
 *                 description: Description of the item
 *               calorie:
 *                 type: number
 *                 description: Calorie count of the item
 *               praperTime:
 *                 type: number
 *                 description: Preparation time of the item (in minutes)
 *     responses:
 *       201:
 *         description: Item created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: New item created successfully
 *                 item:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The item ID
 *                     title:
 *                       type: string
 *                     image:
 *                       type: string
 *                       description: URL of the uploaded image
 *                     price:
 *                       type: number
 *                     description:
 *                       type: string
 *                     calorie:
 *                       type: number
 *                     praperTime:
 *                       type: number
 *                     CategoryId:
 *                       type: string
 *       500:
 *         description: Internal server error
 */
router.post('/:CategoryId', upload.single('image'), itemController.addItem);


/**
 * @swagger
 * /item/category/{CategoryId}:
 *   get:
 *     summary: Get items in a specific category
 *     description: Retrieve all items belonging to a specific category by providing the category ID.
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: CategoryId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the category for which to retrieve the items.
 *     responses:
 *       200:
 *         description: A list of items in the category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Unique identifier for the item.
 *                   title:
 *                     type: string
 *                     description: The title of the item.
 *                   image:
 *                     type: string
 *                     description: The URL of the item image.
 *                   price:
 *                     type: number
 *                     description: The price of the item.
 *                   description:
 *                     type: string
 *                     description: A brief description of the item.
 *                   calorie:
 *                     type: number
 *                     description: The number of calories in the item.
 *                   praperTime:
 *                     type: number
 *                     description: Preparation time in minutes.
 *                   categoryId:
 *                     type: string
 *                     description: The ID of the category to which the item belongs.
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */

router.get('/category/:CategoryId', itemController.getItemsInCategory);

/**
 * @swagger
 * /item/{itemId}:
 *   get:
 *     summary: Get details of a specific item
 *     description: Retrieve detailed information about a specific item using its unique item ID.
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the item to retrieve details for.
 *     responses:
 *       200:
 *         description: Item details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: Unique identifier for the item.
 *                 title:
 *                   type: string
 *                   description: The title of the item.
 *                 image:
 *                   type: string
 *                   description: The URL of the item image.
 *                 price:
 *                   type: number
 *                   description: The price of the item.
 *                 description:
 *                   type: string
 *                   description: A brief description of the item.
 *                 calorie:
 *                   type: number
 *                   description: The number of calories in the item.
 *                 praperTime:
 *                   type: number
 *                   description: Preparation time in minutes.
 *                 categoryId:
 *                   type: string
 *                   description: The ID of the category to which the item belongs.
 *       404:
 *         description: Item not found
 *       500:
 *         description: Internal server error
 */

router.get('/:itemId', itemController.getItemDetails);
/**
 * @swagger
 * /item/{itemId}:
 *   put:
 *     summary: Edit an existing item
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the item to edit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Item Title"
 *               image:
 *                 type: string
 *                 example: "https://example.com/item-image.jpg"
 *               price:
 *                 type: number
 *                 example: 10.99
 *               description:
 *                 type: string
 *                 example: "A new description for the item."
 *               calorie:
 *                 type: number
 *                 example: 250
 *               praperTime:
 *                 type: number
 *                 example: 15
 *     responses:
 *       200:
 *         description: Item updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item updated successfully"
 *                 item:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Updated Item Title"
 *                     image:
 *                       type: string
 *                       example: "https://example.com/item-image.jpg"
 *                     price:
 *                       type: number
 *                       example: 10.99
 *                     description:
 *                       type: string
 *                       example: "A new description for the item."
 *                     calorie:
 *                       type: number
 *                       example: 250
 *                     praperTime:
 *                       type: number
 *                       example: 15
 *       400:
 *         description: Bad request
 *       404:
 *         description: Item not found
 *       500:
 *         description: Server error
 */
router.put('/:itemId', itemController.editItem);
/**
 * @swagger
 * /item/{itemId}:
 *   delete:
 *     summary: Delete an item
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the item to delete
 *     responses:
 *       200:
 *         description: Item deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "Deleted Item Title"
 *                 image:
 *                   type: string
 *                   example: "https://example.com/item-image.jpg"
 *                 price:
 *                   type: number
 *                   example: 10.99
 *                 description:
 *                   type: string
 *                   example: "A description of the item."
 *                 calorie:
 *                   type: number
 *                   example: 250
 *                 praperTime:
 *                   type: number
 *                   example: 15
 *       404:
 *         description: Item not found
 *       500:
 *         description: Server error
 */


router.delete('/:itemId', itemController.deleteItem);



module.exports = router;