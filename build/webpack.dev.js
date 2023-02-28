const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = env => {
  const dev_config = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      port: 8101,
      historyApiFallback: {
        rewrites: [
          {
            from: /./, to: common(env).output.publicPath
          }
        ]
      },
      proxy: {
        '/api': {
          target: 'http://localhost:8602',
          pathRewrite: { '^/api': '' },
          changeOrigin: true
        }
      }
    }
  }

  return merge(common(env), dev_config)
}
