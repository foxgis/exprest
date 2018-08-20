const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.set('json spaces', 2)
app.set('trust proxy', true)

app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common'))
app.use(helmet())
app.use(cors())
app.use(compression())
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use('/api', routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next({ status: 404, message: 'Invalid URL.' })
})

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error:
      process.env.NODE_ENV === 'development'
        ? err.stack && err.stack.split('\n')
        : []
  })
})

module.exports = app
