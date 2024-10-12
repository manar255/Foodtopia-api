const FavoriteItem = require('../models/favoriteItem')

const favoriteService = require('../services/favoriteService');

const addToFavorite = async (req, res, next) => {
    try {
        const userId = 1
        const { itemId } = req.params

        const favoriteItem = await favoriteService.addItemToFavorite(userId, itemId)

        res.json({ message: "Item added to favorite list." });

    } catch (err) {
        next(err);
    }
}
const removeFromFavorite = async (req, res, next) => {
    try {
        const userId = 1
        const { itemId } = req.params;

        await favoriteService.deleteItemFromFavorite(userId, itemId);

        res.json({ message: "Item removed from favorite list." });

    } catch (err) {
        next(err);
    }
}
const getFavoriteItems = async (req, res, next) => {
    try {
        const userId = 1;

        const favoriteItems = await favoriteService.getFavoriteItems(userId);

        res.status(200).json(favoriteItems);

    } catch (err) {
        next(err);
    }
}

module.exports = {
    addToFavorite,
    removeFromFavorite,
    getFavoriteItems
};