const path = require('path');

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
          config: path.resolve(__dirname, './postcss/postcss.config.js'),
        },
      },
    },
  ],
};
