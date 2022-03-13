const logger = require('../logger');
// eslint-disable-next-line
Object.prototype.isEmpty = (object) => Object.keys(object).length === 0;
module.exports = () => (req, _, next) => {
  try {
    const url = req.url.split('?').shift();
    const { query, method } = req;
    let logs = { url, method };
    logs = !Object.isEmpty(query) ? { query, ...logs } : logs;
    logger.info(logs);
  } catch (err) {
    logger.error(err.stack);
  } finally {
    next();
  }
};
