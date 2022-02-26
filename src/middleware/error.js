// eslint-disable-next-line
module.exports = (err, _, res, next) => {
  const { statusCode = 500 } = err;
  return res.status(statusCode).json(err);
};
