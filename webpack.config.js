const path = require('path')
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'production',
  entry: ['./src/promisePolyfill.js', 'whatwg-fetch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'zlFetch',
    libraryTarget: 'umd'
  },
  externals: {
    btoa: {
      commonjs: 'btoa',
      commonjs2: 'btoa',
      amd: 'btoa',
      root: '_'
    }
  }
}
