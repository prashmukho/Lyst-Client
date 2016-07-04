var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.scss']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      },

      {
        test: /\.html$/,
        loader: 'html'
      },

      {
        test: /\.(png|jpe?g|gif|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },

      {
        test: /\.(woff2?|ttf|eot|svg)$/, 
        loader: 'url?limit=10000' 
      },

      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?sourceMap')
      },

      { 
        test: /\.scss$/, 
        include: helpers.root('src', 'app'),
        loader: 'to-string!css!postcss!sass'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })

  ],

  node: { 
    global: 'window', 
    progress: false, 
    crypto: 'empty', 
    module: false, 
    clearImmediate: false, 
    setImmediate: false 
  }
};
