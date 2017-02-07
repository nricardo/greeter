var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // define the tool used
  // on development to aid debugging
  devtool: 'source-map',

  // entry point
  entry: 'bootstrap.ts',

  // output definition
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'src/index.html'
    })
  ],

  // loaders definitions
  module: {
    rules: [
      // transpiles Typescript
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },

      // process SASS/SCSS files and loads them
      {
        test: /\.scss$/,
        loader: 'sass-loader',
        exclude: /node_modules/
      },

      // loads HTML templates
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      }
    ]
  },

  // resolvers definitions
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  }
}
