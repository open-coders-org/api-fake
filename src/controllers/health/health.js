const response = require('../../response');
exports.health = (_, res, next) => {
  try {
    const healthData = {
      uptime: process.uptime(),
      message: 'ok',
      date: new Date(),
      statusCode: 200
    };
    return response(res)(healthData);
  } catch (err) {
    return next(err);
  }
};
