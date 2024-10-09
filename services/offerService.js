const { logger } = require("sequelize/lib/utils/logger");
const Offer = require("../models/Offer");
const Item = require('../models/Item')
const createOffer = async (offerData) => {
    try {
        const offer = await Offer.create(offerData);
        return offer;
    }
    catch (err) {
        throw err;
    }
}

const getOffers = async () => {
    try {
        const offers = await Offer.findAll();
        return offers;
    } catch (err) {
        throw err;
    }
}
const getOfferById = async (id) => {
    try {
        console.log('lol');

        const offer = await Offer.findByPk(id, {
            include: [
                {
                    model: Item,
                    // through: { attributes: ['id', 'title', 'image', 'CategoryId'] },
                }
            ]
        });
        console.log(offer);

        return offer;
    } catch (err) {

    }
}

module.exports = {
    createOffer,
    getOfferById,
    getOffers
}