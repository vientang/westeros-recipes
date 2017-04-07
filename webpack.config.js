const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index'
  },
  output: {
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/bundle.map.js',
    publicPath: '/'
  },
  devtool: '#source-map',
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    loaders: [
			{enforce: 'pre', test: /\.js?$/, loader: 'eslint-loader', exclude: /node_modules/},
			{test: /\.js?$/, loader: 'babel-loader', exclude: /(node_modules)/, query: {presets: ['react', 'es2015']}},
			{test: /(\.css|\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  }
}
