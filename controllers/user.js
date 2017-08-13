const _ = require('lodash')
const User = require('../models/user')


module.exports.get = (req, res, next) => {
  const { username } = req.params

  User.findOne({ username }, (err, user) => {
    if (err) return next(err)
    if (!user) return next({ status: 404 })

    res.json(user)
  })
}


module.exports.create = (req, res, next) => {
  const { username, password } = req.body

  if (!username || !password) {
    return next({
      status: 400,
      message: 'Username or password is not found, both should be provided.'
    })
  }

  if (password.length < 6) {
    return next({
      status: 400,
      message: 'Password is too short, should be at least 6 characters.'
    })
  }

  User.findOne({ username }, (err, user) => {
    if (err) return next(err)
    if (user) return next({ status: 400, message: `"${user}" is already registered.` })

    const newUser = new User({ username, password })
    newUser.save((err, user) => {
      if (err) return next(err)

      res.json(user)
    })
  })
}


module.exports.update = (req, res, next) => {
  const { username } = req.params
  const update = _.pick(req.body, ['name', 'email', 'phone', 'company', 'location'])

  User.findOneAndUpdate({ username }, update, { new: true }, (err, user) => {
    if (err) return next(err)
    if (!user) return next({ status: 404 })

    res.json(user)
  })
}


module.exports.delete = (req, res, next) => {
  const { username } = req.params

  User.findOneAndRemove({ username }, (err, user) => {
    if (err) return next(err)
    if (!user) return next({ status: 404 })

    res.sendStatus(204)
  })
}
