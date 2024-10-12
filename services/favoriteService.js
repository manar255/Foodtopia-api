const FavoriteItem = require("../models/favoriteItem");
const { findUser } = require("./userService");

const Item = require('../models/Item')

const findItemInFavorite = async (query) => {
    try {
        const favoriteItem = await FavoriteItem.findOne({ where: query })
        return favoriteItem;
    }
    catch (err) {
        throw err;
    }
}

const addItemToFavorite = async (UserId,ItemId) => {
    try {
        const favoriteItem = await FavoriteItem.create({UserId,ItemId})
    } catch (err) {
        throw err;
    }
}

const deleteItemFromFavorite = async (UserId, ItemId) => {
    try {
        await FavoriteItem.destroy({ where: { UserId, ItemId } })
    } catch (err) {
        throw err;
    }
}

const getFavoriteItems = async (userId) => {
    try {
        const user = await findUser( { id: userId });
        const favoriteItems = await user.getFavorite();
        console.log(favoriteItems);
        
        return favoriteItems;
    } catch (err) {
        throw err;
    }
}



module.exports = {
    findItemInFavorite,
    addItemToFavorite,
    deleteItemFromFavorite,
    getFavoriteItems
}