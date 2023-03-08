const { createProxyMiddleware } = require('http-proxy-middleware')

module.export = app => {
  app.use(
    createProxyMiddleware('',
      {
        target: 'https://api.meteomatics.com',
        changeOrigin: true
      })
  )
}