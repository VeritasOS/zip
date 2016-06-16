var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'zip/app/static/js');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
    entry: ['whatwg-fetch', APP_DIR + '/index.jsx'], 
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
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
