const FactoryGirl = require('factory-girl');
const adapter = new FactoryGirl.MongooseAdapter();
const { factory } = FactoryGirl;
factory.setAdapter(adapter);

const generateFactory = async (model, key) => {
  factory.define(key, model, {
    username: 'Bob',
    email: 'email.gmai.com'

  });
  await factory.create(key).catch(err => console.error(err));
};

exports.factoryModels = async (models) => {
  Object.keys(models).forEach(async model => {
    console.log('models', models);
    await generateFactory(models[model], model);
  });
};
