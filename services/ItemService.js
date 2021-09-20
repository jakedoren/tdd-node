const Item = require('../models/Item')

async function createItem(req, res) {
    const { name, price } = req.body; 
    if(!name || !price) {
        return res.status(400).json({errorMessage: "Enter a Name and Price"})
    }
    const newItem = new Item({
        Name: name,
        Price: price
    })
    const savedItem = await newItem.save();
    return res.json(savedItem)
}

async function getItems(res) {
    return await Item.find({}, (err, foundItems) => {
        if(err) res.status(500).send(err)
        res.json(foundItems)
    })
}

async function updateItem(req, res) {
    const Id = req.params.id;
    return await Item.findByIdAndUpdate(Id, req.body, { new: true }, (err, updatedItem) => {
        if(err) res.status(500).json(err)
        res.status(201).json(updatedItem)
    })
}

async function deleteItem(req, res) {
    const Id = req.params.id;
    return await Item.findByIdAndDelete(Id, (err, deletedItem) => {
        if(err) res.status(500).json(err)
        if(!deletedItem) res.status(404).json({errorMessage: "The following item does not exist"})
        res.status(204)
    })
}

module.exports = { createItem, getItems, updateItem, deleteItem }