const path = require('path');

module.exports = {
  process(_, filename, __, ___) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
