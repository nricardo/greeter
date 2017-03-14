'use strict';

var path = require('path');
var webpack = require('webpack');

// -- external webpack plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

// -- internal webpack plugins
var DefinePlugin = webpack.DefinePlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var AggressiveMergingPlugin = webpack.optimize.AggressiveMergingPlugin;
var ContextReplacementPlugin = webpack.ContextReplacementPlugin;

module.exports = {
  // define the tool used
  // on development to aid debugging
  devtool: 'source-map',

  // entry point
  entry: 'bootstrap.ts',

  // output definition
  output: {
    filename: 'app.[hash].js',
    path: path.join(__dirname, 'dist')
  },

  // plugins
  plugins: [
    new DefinePlugin({ 
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),

    new ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.resolve(__dirname, '.no-dir/')
    ),

    new UglifyJsPlugin({
      sourceMap: true,
      mangle: { keep_fnames: true }
    }),

    new AggressiveMergingPlugin(),

    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240, // compress assets > 10KB
      minRatio: 0.8 // with 80% compression ratio
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
