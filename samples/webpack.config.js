const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    javascript: [
            // 'babel-polyfill',
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './src/index.js',
    ],
    html: './src/index.html',
  },
  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
  },
  devtool: 'source-map',
  resolveLoader: { fallback: path.join(__dirname, 'node_modules') },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
