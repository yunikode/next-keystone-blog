/** @type {import('next').NextConfig} */

const {withKeystone} = require('@keystone-next/keystone/next')

module.exports = withKeystone({
  reactStrictMode: true,
  basePath: '/next-keystone-blog',
  assetPrefix: '/next-keystone-blog'
})
