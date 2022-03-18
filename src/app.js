const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const router = express.Router();
const errors = require('./error');
const error = require('./middleware/error');
const { NOT_FOUND } = require('./constants/errors');
const db = require('./models');

const { loggerMiddleware } = require('./logger');
routes.init(router);

app.use(loggerMiddleware());
app.use('/api/v1', router);
app.use(bodyParser.urlencoded({ extended: false }));
console.log('test')
app.use((_, res, next) => {
  try {
    throw errors.notfound(NOT_FOUND);
  } catch (err) {
    return next(err);
  }
});
app.use(error);
db();
module.exports = app;
