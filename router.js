const router = require('express').Router()
const users = require('./controllers/user')


router.post('/users', users.create)
router.get('/users/:username', users.retrieve)
router.patch('/users/:username', users.update)
router.delete('/users/:username', users.delete)


module.exports = router
