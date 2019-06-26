const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true
  },

  entry: path.resolve(__dirname, 'index.jsx'),

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },

  name: 'Aterise',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html'
    })
  ],

  resolve: {
    extensions: ['.jsx', '.js']
  }
};
