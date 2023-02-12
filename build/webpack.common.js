const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  return {
    entry: './src/main.tsx',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader',
            // {
            //   loader: 'postcss-loader',
            //   options: {
            //     postcssOptions: {
            //       plugins: ['autoprefixer']
            //     }
            //   }
            // }, 
            'less-loader', 'sass-loader'
          ],
        },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        title: 'deep_react'
      }),
      new webpack.DefinePlugin({
        'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
      })
    ]
  }
}