const router = require('express').Router()
const hello = require('./hello')

router.use(hello)

module.exports = router
