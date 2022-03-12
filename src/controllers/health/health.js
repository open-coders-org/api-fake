const response = require('../../response');
const { statusDb } = require('../../models')();
exports.health = (_, res, next) => {
  try {
    const healthData = {
      uptime: process.uptime(),
      message: 'ok',
      date: new Date(),
      statusCode: 200,
      dbStatus: statusDb()
    };
    return response(res)(healthData);
  } catch (err) {
    return next(err);
  }
};
