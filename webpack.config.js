var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');

var config = {
  devtool: 'eval',
  entry: ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080','./src/js/app.js'],
  output: {
    path: buildPath,
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {

    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],

  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: ['node_modules','src/js'],
    alias: {
      app: '/src/js'
    }
  },
  eslint: {
    configFile: '.eslintrc'
  }
};

module.exports = config;