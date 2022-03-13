const app = require('./app');
const port = process.env.PORT || 9000;
const { logger } = require('./logger');
app.listen(port, (err) => {
  if (err) logger.error(err.stack);
  logger.info(`Server running on port ${port}`);
});
