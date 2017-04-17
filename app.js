require('babel-register')

const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

// react for universal rendering
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const StaticRouter = ReactRouter.StaticRouter
const App = require('./src/App').default
const fs = require('fs')
const _ = require('lodash')
const baseTemplate = fs.readFileSync('./views/index.html')
const template = _.template(baseTemplate)

// import routes
const api = require('./routes/api')
const app = express()

// use middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// use routes
app.use('/api', api)

// package template and App, send to client
app.use('/', (req, res) => {
  const context = {}
  const body = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      {location: req.url, context: context},
      React.createElement(App))
  )
  res.write(template({body: body}))
  res.end()
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
