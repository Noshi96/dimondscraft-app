/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg|otf|txt)$/,
      loader: require.resolve('url-loader'),
      options: {
        limit: '100000',
      },
    });

    return config;
  },
};

module.exports = nextConfig;
