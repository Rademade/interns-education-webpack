const path = require('path');

module.exports.resolvePath = (pathUrl) => path.resolve(__dirname, '../../', pathUrl);
