const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { cssLoader } = require('./loaders/css.loader');
const { svgSpriteLoader } = require('./loaders/svg-sprite.loader');
const { babelLoader } = require('./loaders/babel.loader');
const { vueLoader } = require('./loaders/vue.loader');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  module: {
    rules: [
      vueLoader,
      babelLoader,
      svgSpriteLoader,
      cssLoader,
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    }),
    new VueLoaderPlugin(),
  ],
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
};
