const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index'
  },
  output: {
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/bundle.map.js',
    publicPath: '/public/'
  },
  devtool: '#source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: (process.env.NODE_ENV === 'production') ? [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: true,
        drop_console: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ] : [],
  module: {
    loaders: [
			{enforce: 'pre', test: /\.js?$/, loader: 'eslint-loader', exclude: /node_modules/},
			{test: /\.js?$/, loader: 'babel-loader', exclude: /(node_modules)/, query: {presets: ['react', 'es2015']}},
			{test: /(\.css|\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
      {test: /\.png$/, loader: "url-loader?mimetype=image/png" }
    ]
  }
}
