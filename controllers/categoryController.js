const categoryService = require('../services/categoryService')

const addCategory = async (req, res, next) => {
    try {
        const { name, description, image, isMain } = req.body;
        const category= await categoryService.createCategory({name,description,image,isMain})

        res.status(201).json({ message: 'Category created successfully',category })
    } catch (err) {
        next(err);
    }
}
const getCategories = async (req, res, next) => {
    try {
        const { isMain } = req.query;
        const mainCategory = await categoryService.getCategories(['name', 'image'], isMain != undefined ? { isMain: isMain == 'true' } : {})
        res.status(200).json(mainCategory)
    } catch (err) {
        next(err);
    }
}

const getItemsInCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const items = await categoryService.getCategoryItems(categoryId);
        res.status(200).json(items)
    } catch (err) {
        next(err);
    }
}
const editCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const { name, description, image, isMain } = req.body;

        const category = await categoryService.updateCategory(categoryId,{ name, description, image, isMain });

        res.status(200).json({ message: 'Category updated successfully', category })

    } catch (err) {
        next(err);
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;

        const category = await categoryService.deleteCategory(categoryId);

        res.status(200).json(category)
    } catch (err) {
        next(err);
    }
}

module.exports = {
    addCategory,
    getCategories,
    getItemsInCategory,
    editCategory,
    deleteCategory
}