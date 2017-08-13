const router = require('express').Router()
const users = require('./controllers/user')


// User API
router.get('/users/:username', users.get)
router.post('/users', users.create)
router.patch('/users/:username', users.update)
router.delete('/users/:username', users.delete)


module.exports = router
