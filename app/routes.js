const router = require('express').Router()
const hello = require('./services/hello')

router.use(hello)

module.exports = router
