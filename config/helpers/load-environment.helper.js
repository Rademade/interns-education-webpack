const dotenv = require('dotenv');
const { resolvePath } = require('./resolve-path.helper');

module.exports.loadEnvironmentFile = (environment) => {
  const defaultEnvironmentFileName = '.env';

  const loadEnvironmentPath = (environment) => {
    if (environment) {
      return resolvePath(`${defaultEnvironmentFileName}.${environment}`);
    }

    return resolvePath(defaultEnvironmentFileName);
  }

  dotenv.config({ path: loadEnvironmentPath(environment) })
  dotenv.config({ path: `${loadEnvironmentPath()}.local` })
}
