const fs = require('fs');
const path = require('path');
function getRoutes (app) {
  fs.readdirSync(path.join(__dirname)).forEach(file => {
    if (!file.includes('index')) {
      require(path.join(__dirname, file))(app);
    }
  });
}

exports.init = (app) => getRoutes(app);
