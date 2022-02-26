const fs = require('fs');
const path = require('path');
function getRoutes (app) {
  fs.readdirSync(path.join(__dirname)).forEach(file => {
    if (!file.includes(__filename.split('/').pop())) {
      console.log(file);
      require(path.join(__dirname, file))(app);
    }
  });
}

exports.init = (app) => getRoutes(app);
