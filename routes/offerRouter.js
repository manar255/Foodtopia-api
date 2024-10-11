const express = require('express')
const router = express.Router()

const offerController = require('../controllers/offerController')


/**
 * @swagger
 * tags:
 *   name: Offer
 *   description: Offer management operations
 */

/**
 * @swagger
 * /offer:
 *   post:
 *     summary: Create a new offer
 *     tags: [Offer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *               - image
 *               - percentage
 *               - items
 *             properties:
 *               description:
 *                 type: string
 *                 description: Description of the offer
 *                 example: "Get 20% off on all items"
 *               image:
 *                 type: string
 *                 description: URL of the offer image
 *                 example: "https://example.com/offer-image.jpg"
 *               percentage:
 *                 type: number
 *                 description: Discount percentage of the offer
 *                 example: 20
 *               items:
 *                 type: array
 *                 description: Array of item IDs to associate with the offer
 *                 items:
 *                   type: integer
 *                 example: [1, 2, 3]
 *     responses:
 *       201:
 *         description: Offer created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 description:
 *                   type: string
 *                   example: "Get 20% off on all items"
 *                 image:
 *                   type: string
 *                   example: "https://example.com/offer-image.jpg"
 *                 percentage:
 *                   type: number
 *                   example: 20
 *                 items:
 *                   type: array
 *                   items:
 *                     type: integer
 *                     example: [1, 2, 3]
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

router.post('/', offerController.addOffer);

/**
 * @swagger
 * /offer:
 *   get:
 *     summary: Get all offers
 *     tags: [Offer]
 *     responses:
 *       200:
 *         description: A list of offers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   description:
 *                     type: string
 *                     example: "Get 20% off on all items"
 *                   image:
 *                     type: string
 *                     example: "https://example.com/offer-image.jpg"
 *                   percentage:
 *                     type: number
 *                     example: 20
 *                   items:
 *                     type: array
 *                     items:
 *                       type: integer
 *                       example: [1, 2, 3]
 *       500:
 *         description: Server error
 */
router.get('/', offerController.getAllOffers);
/**
 * @swagger
 * /offer/{id}:
 *   get:
 *     summary: Get offer by ID
 *     tags: [Offer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The offer ID
 *     responses:
 *       200:
 *         description: Offer details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 description:
 *                   type: string
 *                   example: "Get 20% off on all items"
 *                 image:
 *                   type: string
 *                   example: "https://example.com/offer-image.jpg"
 *                 percentage:
 *                   type: number
 *                   example: 20
 *                 items:
 *                   type: array
 *                   items:
 *                     type: integer
 *                     example: [1, 2, 3]
 *       404:
 *         description: Offer not found
 *       500:
 *         description: Server error
 */


router.get('/:id', offerController.getOfferdetails);
/**
 * @swagger
 * /offer/{offerId}:
 *   put:
 *     summary: Update an offer by ID
 *     tags: [Offer]
 *     parameters:
 *       - in: path
 *         name: offerId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The offer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 example: "Get 30% off on selected items"
 *               image:
 *                 type: string
 *                 example: "https://example.com/updated-offer-image.jpg"
 *               percentage:
 *                 type: number
 *                 example: 30
 *               items:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 example: [1]
 *     responses:
 *       200:
 *         description: Offer updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Offer updated successfully"
 *                 offer:
 *                   $ref: '#/components/schemas/Offer'
 *       404:
 *         description: Offer not found
 *       500:
 *         description: Server error
 */

router.put('/:offerId', offerController.editOffer);
/**
 * @swagger
 * /offer/{offerId}:
 *   delete:
 *     summary: Delete an offer by ID
 *     tags: [Offer]
 *     parameters:
 *       - in: path
 *         name: offerId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The offer ID
 *     responses:
 *       200:
 *         description: Offer deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Offer deleted successfully"
 *                 offerId:
 *                   type: integer
 *                   example: 1
 *       404:
 *         description: Offer not found
 *       500:
 *         description: Server error
 */

router.delete('/:offerId', offerController.deleteOffer);

module.exports = router;