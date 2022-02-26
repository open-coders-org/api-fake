const response = require('../response');

// eslint-disable-next-line
module.exports = (err, _, res, next) => {
  const { statusCode = 500 } = err;
  return response(res)({ ...err, statusCode });
};
