const Item = require('../models/Item')
const createItem = async (itemData) => {
    try {
        const item = await Item.create(itemData);
        return item;
    }
    catch (err) {
        throw err;
    }
}
const getItems = async (attributes, query) => {
    try {
        const items = await Item.findAll({ attributes: attributes, where: query });
        return items
    }
    catch (err) {
        throw err;
    }

}
const getItem = async (id, attributes) => {
    try {
        const item = await Item.findByPk(id, { attributes });
        return item;
    }
    catch (err) {
        throw err;
    }
}
const deleteItem = async (id) => {
    try {
        const item = await Item.destroy({ where: { id: id } });
        return item;
    } catch (err) {
        throw err;
    }

}

const updateItem = async (id, itemData) => {
    try {
        const item = await Item.update(
            itemData,
            {
                where: {
                    id,
                },
            },
        );
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createItem,
    getItems,
    getItem,
    deleteItem,
    updateItem
}