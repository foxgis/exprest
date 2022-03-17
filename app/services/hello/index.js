const router = require('express').Router()
const controller = require('./controller')

router.get('/hello', controller.get)

module.exports = router
