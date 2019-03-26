const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const autoprefixer = require('autoprefixer');
const webpackPluginImageTransformWebpAndMini = require('webpack-plugin-image-transform-webp-and-mini')

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {

          }
        }
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[hash:base64:8]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => autoprefixer({
                browsers: ['last 3 versions', '> 1%']
              })
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ]
      }, 
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.(jpe?g|png|gif)/,
        loader: "file-loader",
        options: {
          name: '[name]-[hash:8].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.js']
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
    }),
    new webpackPluginImageTransformWebpAndMini({
      name: '[name]-[hash:8].[ext]',
      paths: {
        dir: path.resolve(__dirname, './src/assets'),
        include: ['bg']
      }
    })
  ]
}