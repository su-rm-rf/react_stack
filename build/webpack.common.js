const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pkg = require('../package.json')

const isDev = process.env.NODE_ENV === 'development'

module.exports = env => {
  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'static/js/[name].[chunkhash:8].js',
      publicPath: pkg.publicPath
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            // loader: ['thread-loader', 'babel-loader'],
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: [
                '@babel/plugin-transform-runtime',
                ['@babel/plugin-proposal-decorators', { legacy: true }],
              ]
            }
          }
        },
        {
          test: /\.s?css$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['postcss-preset-env']
                }
              }
            },
            'less-loader', 'sass-loader'
          ],
        },
        {
          test: /.(png|jpg|jpeg|gif|svg)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 5*1024
            }
          },
          generator: {
            filename: 'static/images/[name].[contenthash:8][ext]'
          }
        }
      ],
      noParse: /jquery/
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
      alias: {
        '@': path.join(__dirname, '../src')
      },
      modules: [ path.resolve(__dirname, '../node_modules') ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        title: 'deep_react'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../public'),
            to: path.resolve(__dirname, '../dist'),
            filter: source => {
              return !source.includes('index.html')
            }
          }
        ]
      }),
      new webpack.DefinePlugin({
        'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /local/,
        contextRegExp: /moment/
      }),
      // new ModuleFederalPlugin({

      // })
    ],
    cache: {
      type: 'filesystem'
    },
    externals: {
      jquery: 'jQuery'
    }
  }
}
