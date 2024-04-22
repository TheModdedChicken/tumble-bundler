const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})
 
module.exports = withNextra({
  basePath: '/docs',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
})