const Item = require('../models/Item')
const createItem = async(itemData)=>{
    try{
        const item = await Item.create(itemData);
        return item;
    }
    catch(err){
        throw err;
    }
}
const getItems = async(attributes,query)=>{
    try{
        const items = await Item.findAll({attributes:attributes,where:query});
        return items
    }
    catch(err){
        throw err;
    }

}
const getItem = async(id,attributes)=>{
    try{
        console.log('lol');
        
        const item = await Item.findByPk(id,{attributes});
        return item;
    }
    catch(err){
        throw err;
    }

}

module.exports={
    createItem,
    getItems,
    getItem
}