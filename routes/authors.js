const router = require('express').Router()
const authorsCtrl = require('../controllers/authors.js')

router.get('/', authorsCtrl.index)
router.get('/:id', authorsCtrl.show)
router.post('/', authorsCtrl.create)
router.put('/:id', authorsCtrl.update)
router.delete('/:id', authorsCtrl.delete)

module.exports = router