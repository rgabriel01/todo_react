var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'bin');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
    index: APP_DIR + '/app.jsx',
    custom: APP_DIR + '/app2.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].bundle.js"
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;