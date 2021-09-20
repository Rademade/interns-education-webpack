module.exports.svgSpriteLoader = {
  test: /\.svg$/,
  use: [
    'svg-sprite-loader',
    'svgo-loader'
  ]
};
