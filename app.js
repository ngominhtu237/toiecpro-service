const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const userRoutes = require('./api/routes/user-routes');
const partRoutes = require('./api/routes/part-routes');
const categoryRoutes = require('./api/routes/category-routes');
const testRoutes = require('./api/routes/test-routes');
const kkk = require('./api/routes/kkk');

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Routes which should handle requests
app.use('/users', userRoutes);
app.use('/parts', partRoutes);
app.use('/categories', categoryRoutes);
app.use('/tests', testRoutes);
app.use('/kkk', kkk);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
})

module.exports = app;