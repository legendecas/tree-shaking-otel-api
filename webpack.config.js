const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'output'),
  },
  mode: 'production',
  optimization: {
    // disable minimization so that we can inspect the output more easily.
    minimize: false,
  }
};
