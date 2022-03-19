const config = {
  verbose: true,
  setupFilesAfterEnv: ['./src/test/jest.setup.js']
};
module.exports = async () => {
  return config;
};
