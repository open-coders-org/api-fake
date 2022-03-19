const db = require('../models');
const { models, mongoose } = db();
const { factoryModels } = require('./factory/models');
beforeAll(async () => {
  await factoryModels(models);
});

afterEach(async () => {
  Object.keys(models).forEach(async model => {
    await models[model].remove();
  });
});

afterAll(async () => {
  // await mongoose.connection.close()
});
