const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {

          }
        }
      }
    ]
  },
  devServer: {
    open: true,
    port: 10000
  },
  plugins: [
    new VueLoaderPlugin(),
    new cleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './index.html'
    })
  ]
}