const router = require('express').Router()
const controller = require('./controller')

router.get('/hello/v1', controller.get)

module.exports = router
