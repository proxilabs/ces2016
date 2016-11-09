const path = require('path');
const webpack = require('webpack');
const buffer = require('buffer').Buffer;

module.exports = {
  entry: {
    javascript: [
            // 'babel-polyfill',
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './src/app.js',
    ],
    html: './src/index.html',
  },
  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
  },
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
    new webpack.ProvidePlugin({
      Buffer: 'buffer',
      'window.Buffer': 'buffer'
    }),
  ],
};
