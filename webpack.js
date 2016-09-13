var HappyPack = require('happypack')

// Ensure `postcss` key is extracted
HappyPack.SERIALIZABLE_OPTIONS = HappyPack.SERIALIZABLE_OPTIONS.concat(['postcss'])

module.exports = {
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loaders: process.env.BUILD_PARALLEL ? ['happypack/loader?id=css'] : ['css-loader', 'postcss-loader']
      }
    ]
  },

  plugins: [
    new HappyPack({
      id: 'css',
      loaders: ['css-loader', 'postcss-loader']
    })
  ],
  output: {
    path: './',
    filename: 'main.packed.js'
  },
  postcss: function () {
    return [require('autoprefixer')({
      browsers: ['ie 10']
    })];
  }
}
