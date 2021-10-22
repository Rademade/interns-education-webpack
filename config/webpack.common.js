const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { cssLoader } = require('./loaders/css.loader');
const { svgSpriteLoader } = require('./loaders/svg-sprite.loader');
const { babelLoader } = require('./loaders/babel.loader');
const { vueLoader } = require('./loaders/vue.loader');
const { resolvePath } = require('./helpers/resolve-path.helper');
const { applicationEnvironment } = require('./helpers/application-environment.helper');

module.exports = ({ environment }) => ({
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
      '@': resolvePath('src'),
      process: 'process/browser'
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.EnvironmentPlugin(applicationEnvironment(environment)),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolvePath('public/index.html'),
      templateParameters: (compilation, assets, assetTags, options) => {
        return {
          compilation,
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            tags: assetTags,
            files: assets,
            options: {
              ...options,
              appName: environment.VUE_APP_NAME,
            }
          },
          'foo': 'bar'
        };
      },
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
    path: resolvePath('dist'),
    clean: true,
  },
});
