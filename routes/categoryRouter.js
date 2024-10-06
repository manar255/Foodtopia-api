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



module.exports = router;