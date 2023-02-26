const prodConfig = require('./webpack.prod')
const { merge } = require('webpack-merge')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const smp = new SpeedMeasurePlugin()

module.exports = env => {
  return smp.wrap(merge(prodConfig(env), {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  }))
}
