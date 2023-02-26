const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const globAll = require('glob-all')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = env => {
  const prod_config = {
    mode: 'production',
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              pure_funcs: ['console.log']
            }
          }
        })
      ],
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /node_modules/,
            name: 'vendors',
            minChunks: 1,
            chunks: 'initial',
            minSize: 0,
            priority: 1
          },
          common: {
            name: 'commons',
            minChunks: 2,
            chunks: 'initial',
            minSize: 0
          }
        }
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css'
      }),
      new PurgeCSSPlugin({
        paths: globAll.sync([
          `${ path.join(__dirname, '../src') }/**/*.tsx`,
          path.join(__dirname, '../public/index.html')
        ]),
        safelist: {
          standard: [/^ant-/]
        }
      }),
      new CompressionPlugin({
        test: /.(css|js)$/,
        filename: '[path][base].gz',
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }

  return merge(common(env), prod_config)
}