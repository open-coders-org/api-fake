const os = require('os');
const logger = require('pino')();
const defaultLog = { platform: os.platform(), mem: os.totalmem(), freemem: os.freemem() };
const loggerChild = () => logger.child(defaultLog);
module.exports = loggerChild();
