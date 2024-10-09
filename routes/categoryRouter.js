const express = require('express')

const router = express.Router()

const categoryController = require('../controllers/categoryController');
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Category management operations
 */

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Add a new category
 *     description: Create a new category by providing the necessary details.
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the category.
 *               description:
 *                 type: string
 *                 description: A brief description of the category.
 *               image:
 *                 type: string
 *                 description: URL of the category image.
 *               isMain:
 *                 type: boolean
 *                 description: Set to true if the category is a main category.
 *             required:
 *               - name
 *               - description
 *               - image
 *               - isMain
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                 category:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The ID of the category.
 *                     name:
 *                       type: string
 *                       description: The name of the category.
 *                     description:
 *                       type: string
 *                       description: The description of the category.
 *                     image:
 *                       type: string
 *                       description: The URL of the category image.
 *                     isMain:
 *                       type: boolean
 *                       description: Whether the category is a main category.
 *       500:
 *         description: Internal server error
 */
router.post('/', categoryController.addCategory);

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Get categories
 *     tags: [Category]
 *     description: Retrieve a list of categories. Optionally filter by whether they are main categories.
 *     parameters:
 *       - in: query
 *         name: isMain
 *         required: false
 *         schema:
 *           type: boolean
 *         description: Set to true to get main categories only (default is true).
 *     responses:
 *       200:
 *         description: Successfully retrieved list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The category ID.
 *                   name:
 *                     type: string
 *                     description: The name of the category.
 *                   image:
 *                     type: string
 *                     description: The URL of the category image.
 *       500:
 *         description: Internal server error
 */
router.get('/', categoryController.getCategories);

/**
 * @swagger
 * /category/items/{CategoryId}:
 *   get:
 *     summary: Get items in a specific category
 *     description: Retrieve all items belonging to a specific category by providing the category ID.
 *     tags: [Category]
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

router.get('/items/:categoryId',categoryController.getItemsInCategory)



module.exports = router;