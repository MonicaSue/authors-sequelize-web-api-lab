const router = require('express').Router()
const authorsCtrl = require('../controllers/authors.js')

router.get('/', authorsCtrl.index)
router.get('/:id', authorsCtrl.show)
router.post('/', authorsCtrl.create)

module.exports = router