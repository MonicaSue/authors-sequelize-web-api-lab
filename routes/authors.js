const router = require('express').Router()
const authorsCtrl = require('../controllers/authors.js')

router.post('/', authorsCtrl.create)

module.exports = router