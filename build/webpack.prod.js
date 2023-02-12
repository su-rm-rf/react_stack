const common = require('./webpack.common')
const {merge} = require('webpack-merge')

module.exports = env => {
  const prod_config = {
    mode: 'production',
  }

  return merge(common(env), prod_config)
}