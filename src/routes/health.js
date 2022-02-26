const healthController = require('../controllers/health/health');

module.exports = (router) => {
  router.get('/health', healthController.health);
};
