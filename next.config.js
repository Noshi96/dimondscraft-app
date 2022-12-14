module.exports = {
  pageExtensions: ['page.tsx'],
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/, /\.jpg$/],
        loader: require.resolve('url-loader'),
        options: {
          outputPath: '../public/assets/', // if you don't use ../ it will put it inside ".next" folder by default
          publicPath: 'assets/',
        },
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
        loader: require.resolve('url-loader'),
        options: {
          limit: '100000',
        },
      }
    )

    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    }

    return config
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
  images: {
    disableStaticImages: true,
  },

  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
}
