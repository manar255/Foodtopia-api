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
const deleteOffer = async (id) => {
    try {
        const offer = await Offer.destroy({ where: { id: id } });
        return offer;
    } catch (err) {
        throw err;
    }

}

const updateOffer = async (id, offerData) => {
    try {
       
        const offer = await Offer.findByPk(id);
        if (!offer) {
            throw new Error('Offer not found');
        }

        
        await offer.update(offerData);

        
        if (offerData.items) {
            await offer.setItems(offerData.items); // Assuming the offer has a setItems method for associations
        }

        return offer;



        return offer;
    } catch (err) {
        throw err;
    }
}
module.exports = {
    createOffer,
    getOfferById,
    getOffers,
    deleteOffer,
    updateOffer
}