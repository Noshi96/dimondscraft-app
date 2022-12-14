/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
      loader: require.resolve('url-loader'),
      options: {
        limit: '100000',
      },
    })

    return config
  },
}

module.exports = nextConfig
