const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const connectionStatus = {
  0: 'disconnected',
  1: 'connected',
  2: 'connecting',
  3: 'disconnecting'
};
const getStatusDb = (status) => (connectionStatus[status]);
const statusDb = () => (getStatusDb(mongoose.connection.readyState));
let models = null;
module.exports = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/api_fake');
  if (models) return { models, statusDb, mongoose };
  models = {};
  fs.readdirSync(path.join(__dirname)).forEach(file => {
    if (!file.includes('index')) {
      const model = require(path.join(__dirname, file));
      const modelName = file.split('.').shift();
      models[modelName] = model(mongoose);
    }
  });
  return { models, statusDb, mongoose };
};
