const response = require('../../response');
const mongoose = require('mongoose');
const { getStatusDb } = require('../../models')();
exports.health = (_, res, next) => {
  try {
    const healthData = {
      uptime: process.uptime(),
      message: 'ok',
      date: new Date(),
      statusCode: 200,
      dbStatus: getStatusDb(mongoose.connection.readyState)
    };
    return response(res)(healthData);
  } catch (err) {
    return next(err);
  }
};
