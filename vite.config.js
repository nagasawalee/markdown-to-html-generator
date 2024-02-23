const ViteDocCreator = require('./dev/vite-doc-creator')

module.exports = {
  plugin: [
    new ViteDocCreator({
      port: 5173,
    })
  ]
}