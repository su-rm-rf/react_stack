const common = require('./webpack.common')
const {merge} = require('webpack-merge')

module.exports = env => {
  const dev_config = {
    mode: 'development',
    devServer: {
      port: 8101
    }
  }

  return merge(common(env), dev_config)
}