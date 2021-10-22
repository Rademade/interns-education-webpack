const { merge } = require('webpack-merge');
const { AVAILABLE_ENVIRONMENTS } = require('./config/resources/available-environments.resource');

const commonConfig = require('./config/webpack.common.js');
const productionConfig = require('./config/webpack.production.js');
const developmentConfig = require('./config/webpack.development.js');
const { loadEnvironmentFile } = require('./config/helpers/load-environment.helper');

module.exports = (environment) => {
  let environment_;


  if (environment.production) environment_ = AVAILABLE_ENVIRONMENTS.Production;
  if (environment.development) environment_ = AVAILABLE_ENVIRONMENTS.Development;

  loadEnvironmentFile(environment_);

  const commonConfig_ = commonConfig({ environment: process.env });
``
  switch (environment_) {
    case AVAILABLE_ENVIRONMENTS.Production:
      return merge(commonConfig_, productionConfig)
    case AVAILABLE_ENVIRONMENTS.Development:
      return merge(commonConfig_, developmentConfig)
    default:
      throw new Error(`No configuration found for "${environment_}" environment`)
  }
}
