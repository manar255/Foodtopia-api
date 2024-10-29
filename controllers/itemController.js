const itemService = require('../services/itemService')
const uploadToCloudinary = require('../services/uploadFileService').uploadToCloudinary;


const addItem = async (req, res, next) => {
    try {
        const { CategoryId } = req.params;
        const image = await uploadToCloudinary(req.file.buffer,'Items');
        const imageURl=image.url;
        console.log("lol=>",imageURl);
        
        const { title, price, description, calorie, praperTime } = req.body;
        const item = await itemService.createItem({ title, image:imageURl, price, description, calorie, praperTime, CategoryId })
        res.status(201).json({ message: 'New item created successfully', item })
    } catch (err) {
        next(err);
    }
}

const getItemsInCategory = async (req, res, next) => {
    try {
        const { CategoryId } = req.params;

        const items = await itemService.getItems(['title', 'CategoryId'], { CategoryId: CategoryId })

        res.status(200).json(items)
    } catch (err) {
        next(err);
    }
}

const getItemDetails = async (req, res, next) => {
    try {
        const { itemId } = req.params;

        const item = await itemService.getItem(itemId, ['title', 'image'])
        res.status(200).json({ message: 'Item deleted successfully', item })

        res.status(200).json(item)
    } catch (err) {
        next(err);
    }
}
const editItem = async (req, res, next) => {
    try {
        const { itemId } = req.params;
        const { title, image, price, description, calorie, praperTime } = req.body;

        const item = await itemService.updateItem(itemId, { title, image, price, description, calorie, praperTime });

        res.status(200).json({ message: 'Item updated successfully', item })

    } catch (err) {
        next(err);
    }
}

const deleteItem = async (req, res, next) => {
    try {
        const { itemId } = req.params;

        const item = await itemService.deleteItem(itemId);

        res.status(200).json(item)
    } catch (err) {
        next(err);
    }
}
module.exports = {
    addItem,
    getItemsInCategory,
    getItemDetails,
    editItem,
    deleteItem
}