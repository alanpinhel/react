'use strict'

const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')
const path = require('path')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'standard'
  })

  newConfig.resolve.alias = Object.assign({}, newConfig.resolve.alias, {
    src: path.join(__dirname, '..', 'src'),
    components: path.join(__dirname, '..', 'src', 'components')
  });

  return newConfig
}
