const offerService = require('../services/offerService');

const addOffer = async (req, res, next) => {
    try {
        const { description, image, percentage, items } = req.body;
        const offer = await offerService.createOffer({ description, image, percentage })
        await offer.setItems(items);
        res.status(201).json(offer)
    } catch (err) {
        next(err)
    }
}
//get all offers
const getAllOffers = async (req, res, next) => {
    try {
        const offers = await offerService.getOffers();
        res.status(200).json(offers)
    } catch (err) {
        next(err)
    }
}
//get offer by id
const getOfferdetails = async (req, res, next) => {
    try {
        const offerId = req.params.id;
        const offer = await offerService.getOfferById(offerId);
        // console.log(offer);
        
        res.status(200).json(offer)

    }
    catch (err) {
        next(err)
    }
}
const editOffer = async (req, res, next) => {
    try {
        const { offerId } = req.params;
        const { description, image, percentage, items }  = req.body;

        const offer = await offerService.updateOffer(offerId, { description, image, percentage ,items});

        res.status(200).json({ message: 'Offer updated successfully', offer })

    } catch (err) {
        next(err);
    }
}

const deleteOffer = async (req, res, next) => {
    try {
        const { offerId } = req.params;

        const offer = await offerService.deleteOffer(offerId);

        res.status(200).json(offer)
    } catch (err) {
        next(err);
    }
}
//add items to offer
//delete offer
//get offer details
module.exports = {
    addOffer,
    getAllOffers,
    getOfferdetails,
    editOffer,
    deleteOffer
}