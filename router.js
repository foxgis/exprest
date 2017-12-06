const router = require('express').Router()
const hello = require('./controllers/hello')

router.get('/', hello.get)

module.exports = router
