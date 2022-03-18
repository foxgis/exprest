const router = require('express').Router()
const { asyncHandler } = require('../utils')
const controller = require('./controller')

router.get('/hello', asyncHandler(controller.get))

module.exports = router
