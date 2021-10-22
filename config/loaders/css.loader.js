const { resolvePath } = require('../helpers/resolve-path.helper');

module.exports.cssLoader = {
  test: /\.css$/i,
  use: [
    'vue-style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: resolvePath('config/loaders/postcss/postcss.config.js'),
        },
      },
    },
  ],
};
