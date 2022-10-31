const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'output'),
  },
  mode: 'production',
  optimization: {
    minimize: false,
  }
};
