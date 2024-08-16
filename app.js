const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const cors = require('cors')
const createError = require('http-errors')
const { router } = require('express-file-routing')

// Load environment variables
dotenv.config({ path: path.resolve('.env') })
dotenv.config({ path: path.join(__dirname, '.env.default') })

const app = express()

app.disable('x-powered-by')
app.set('trust proxy', true)
app.set('json spaces', 2)
app.set('json replacer', (_k, v) => (v === null ? undefined : v)) // omit null values in json response

app.use(morgan(process.env.LOG_FORMAT))
app.use(cors())
app.use(compression())
app.use(express.json({ limit: process.env.JSON_LIMIT }))
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', router({ directory: path.resolve('routes') }))
app.use(express.static('public'))

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createError(404, 'URL错误，请检查URL是否正确。'))
})

// error handler
app.use((err, _req, res, _next) => {
  if (err.code === 'ENOENT') return res.sendStatus(404)

  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? [] : err.stack && err.stack.split('\n')
  })
})

module.exports = app
