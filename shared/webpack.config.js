module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  node: {
    global: false,
  },
};
