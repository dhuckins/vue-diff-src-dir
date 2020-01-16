const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'frontend')
      }
    },
    entry: {
      app: './frontend/main.js'
    }
  }
}
