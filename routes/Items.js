const router = require('express').Router();
const ItemService = require('../services/ItemService')

router.post('/', async (req, res) => {
    await ItemService.createItem(req, res)
})

router.get('/', async (req, res) => {
    await ItemService.getItems(res)
})

router.put('/:id', async (req, res) => {
    await ItemService.updateItem(req, res)
})

router.delete('/:id', async (req, res) => {
    await ItemService.deleteItem(req, res)
})

module.exports = router;