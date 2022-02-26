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
let models = null;
module.exports = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/api_fake');
  console.log(getStatusDb(mongoose.connection.readyState));
  if (models) return { models, getStatusDb };
  models = {};
  fs.readdirSync(path.join(__dirname)).forEach(file => {
    if (!file.includes(__filename.split('/').pop())) {
      const model = require(path.join(__dirname, file));
      const modelName = file.split('.').shift();
      models[modelName] = model(mongoose);
    }
  });
  return { models, getStatusDb };
};
