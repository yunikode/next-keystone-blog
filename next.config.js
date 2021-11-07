/** @type {import('next').NextConfig} */

const {withKeystone} = require('@keystone-next/keystone/next')

module.exports = withKeystone({
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
})
