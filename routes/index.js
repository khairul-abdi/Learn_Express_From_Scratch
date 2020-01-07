const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')

router.get('/:id', todoController.read)
router.post('/', todoController.create)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.delete)

module.exports = router