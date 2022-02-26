const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const router = express.Router();
routes.init(router);
app.use('/api/v1', router);
app.use(bodyParser.urlencoded({ extended: false }));

app.use((_, res) => {
  return res.send({ message: 'notfound' });
});

module.exports = app;
