const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: __dirname,
  entry: {
    app: './src/index'
  },
  output: {
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/bundle.map.js',
    publicPath: '/public/'
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: (process.env.NODE_ENV === 'production') ? [
    new webpack.optimize.OccurrenceOrderPlugin()
  ] : [],
  module: {
    loaders: [
			{enforce: 'pre', test: /\.js?$/, loader: 'eslint-loader', exclude: /node_modules/},
			{test: /\.js?$/, loader: 'babel-loader', exclude: /(node_modules)/, query: {presets: ['react', 'es2015']}},
			{test: /(\.css|\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  }
}
